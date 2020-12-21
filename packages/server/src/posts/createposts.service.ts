import { postLinkValidation, postMarkDownValidation } from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { PostEntity } from 'src/posts/posts.entity';
import { GraphQLUserContext } from 'src/users/users';
import { Repository } from 'typeorm';
import { shapeError } from '../shared/shapeError';
import { PostError, PostInputLink, PostInputMarkDown } from './posts.types';

@Injectable()
export class CreatePostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}

  async createPostMarkDown({
    post_text,
    title,
  }: PostInputMarkDown): Promise<PostError | null> {
    try {
      await postMarkDownValidation.validate({ post_text, title });
    } catch (error) {
      return shapeError(error);
    }
    const post = this.postRepository.create({
      post_text,
      title,
      user: { user_id: this.getUserId() },
    });
    try {
      await this.postRepository.save(post);
    } catch (error) {
      return {
        message: 'Can not create post',
        path: 'post',
      };
    }
    return null;
  }

  async createPostLink({
    link,
    title,
  }: PostInputLink): Promise<PostError | null> {
    try {
      await postLinkValidation.validate({ link, title });
    } catch (error) {
      return shapeError(error);
    }
    const post = this.postRepository.create({
      link,
      title,
      user: { user_id: this.getUserId() },
    });
    try {
      await this.postRepository.save(post);
    } catch (error) {
      return {
        message: 'Can not create post',
        path: 'post',
      };
    }
    return null;
  }
  private getUserId(): string {
    return this.context.session.user;
  }
}
