import { commentDeleteValidation, commentValidation } from '@bluedit/common';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import { shapeError } from './../shared/shapeError';
import { UserAuthHelpService } from './../shared/userauth.service';
import { CommentEntity } from './comments.entity';
import { CommentError, CommentInput } from './comments.types';
interface editCommentInteface {
  comment_id: string;
  comment_text: string;
}

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    private userAuthHelpService: UserAuthHelpService,
    @InjectQueue('comments') private commentsQueue: Queue,
  ) {}

  async createComment({
    comment_text,
    post_id,
  }: CommentInput): Promise<CommentError | null> {
    try {
      await commentValidation.validate({ comment_text, post_id });
    } catch (error) {
      return shapeError(error);
    }
    try {
      const comment = this.commentRepository.create({
        post: { post_id },
        user: { user_id: this.userAuthHelpService.getUser() },
        comment_text,
      });

      await this.commentRepository.save(comment);
    } catch (error) {
      return {
        message: 'error at comment',
        path: 'comment',
      };
    }
  }
  async getComments(post_id: string) {
    try {
      const comments = await this.commentRepository
        .createQueryBuilder('comment')
        .leftJoinAndSelect('comment.user', 'users')
        .where('comment.postPostId =:post_id', { post_id })
        .select([
          'users.displayName',
          'comment.comment_text',
          'comment.comment_id',
          'users.username',
          'users.email',
        ])
        .getMany();

      return comments;
    } catch (error) {
      return null;
    }
  }
  async editComment({
    comment_text,
    comment_id,
  }: editCommentInteface): Promise<CommentError> {
    try {
      await commentValidation.validate({ comment_text, post_id: comment_id });
    } catch (error) {
      return shapeError(error);
    }
    try {
      const res = await this.commentRepository.update(
        { comment_id, user: { user_id: this.userAuthHelpService.getUser() } },
        { comment_text },
      );
      if (res.affected === 0) throw new Error();
    } catch (error) {
      return {
        message: 'Cannot update comment',
        path: 'comment-edit',
      };
    }
  }
  async deleteComment(comment_id: string): Promise<CommentError> {
    try {
      await commentDeleteValidation.validate({ comment_id });
    } catch (error) {
      return shapeError(error);
    }

    try {
      const res = await this.commentRepository.delete({ comment_id });
      if (res.affected === 0) {
        throw new Error();
      }
    } catch (error) {
      return {
        message: 'Error At Deleting Comment',
        path: 'comment-delete',
      };
    }
  }
}
