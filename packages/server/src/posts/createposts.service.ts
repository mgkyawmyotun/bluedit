import {
  postImagesValidation,
  postLinkValidation,
  postMarkDownValidation,
  postVideosValidation,
} from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { PostEntity } from 'src/posts/posts.entity';
import { GraphQLUserContext } from 'src/users/users';
import { Repository } from 'typeorm';
import { shapeError } from '../shared/shapeError';
import {
  PostError,
  PostInputImage,
  PostInputLink,
  PostInputMarkDown,
  PostInputVideo,
} from './posts.types';

interface CreatePost<T> {
  title: string;
  field: T;
  name: 'images' | 'link' | 'post_text' | 'videos';
  subbluedit?: string;
}
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
    subbluedit,
    title,
  }: PostInputMarkDown): Promise<PostError | null> {
    try {
      await postMarkDownValidation.validate({ post_text, title });
    } catch (error) {
      return shapeError(error);
    }

    return this.createPost<typeof post_text>({
      title,
      name: 'post_text',
      field: post_text,
      subbluedit,
    });
  }

  async createPostLink({
    link,
    subbluedit,
    title,
  }: PostInputLink): Promise<PostError | null> {
    try {
      await postLinkValidation.validate({ link, title });
    } catch (error) {
      return shapeError(error);
    }
    return this.createPost<typeof link>({
      title,
      name: 'link',
      subbluedit,
      field: link,
    });
  }
  public async createPostImage({ images, title, subbluedit }: PostInputImage) {
    try {
      await postImagesValidation.validate({ images, title });
    } catch (error) {
      return shapeError(error);
    }

    return this.createPost<typeof images>({
      title,
      name: 'images',
      field: images,
      subbluedit,
    });
  }
  public async createPostVideo({ videos, title, subbluedit }: PostInputVideo) {
    try {
      await postVideosValidation.validate({ videos, title });
    } catch (error) {
      return shapeError(error);
    }

    return this.createPost<typeof videos>({
      title,
      name: 'images',
      field: videos,
      subbluedit,
    });
  }
  private async createPost<T>({
    title,
    subbluedit,
    field,
    name,
  }: CreatePost<T>): Promise<PostError | null> {
    const post = this.postRepository.create({
      [name]: field,
      title,
      user: { user_id: this.getUserId() },
      sub: { name: subbluedit },
    });
    try {
      await this.postRepository.save(post);
    } catch (error) {
      console.log(error);
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
