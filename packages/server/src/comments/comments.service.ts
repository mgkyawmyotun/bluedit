import { commentValidation } from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { GraphQLUserContext } from 'src/users/users';
import { Repository } from 'typeorm';
import { shapeError } from './../shared/shapeError';
import { CommentEntity } from './comments.entity';
import { CommentError, CommentInput } from './comments.types';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
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
        user: { user_id: this.getUserId() },
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
          'users.username',
          'users.email',
        ])
        .getMany();

      return comments;
    } catch (error) {
      return null;
    }
  }
  private getUserId(): string {
    return this.context.session.user;
  }
}
