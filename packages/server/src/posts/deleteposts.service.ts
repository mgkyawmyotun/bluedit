import { postDeleteValidation } from '@bluedit/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { shapeError } from './../shared/shapeError';
import { UserAuthHelpService } from './../shared/userauth.service';
import { PostError } from './posts.types';

@Injectable()
export class PostDeleteService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private userAuthHelpService: UserAuthHelpService,
  ) {}
  async deletePost(post_id: string): Promise<PostError | null> {
    try {
      await postDeleteValidation.validate({ post_id });
    } catch (error) {
      shapeError(error);
    }
    try {
      const result = await this.postRepository.delete({
        post_id: post_id,
        user: { user_id: this.userAuthHelpService.getUser() },
      });
      if (result.affected === 0) {
        throw new Error();
      }
    } catch (error) {
      return {
        message: error.message || 'Cannot Delete Post',
        path: 'post-delete',
      };
    }
    return null;
  }
}
