import {
  postImagesValidation,
  postLinkValidation,
  postMarkDownValidation,
  postVideosValidation,
} from '@bluedit/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuthHelpService } from 'src/shared/userauth.service';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
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
    private userAuthHelpService: UserAuthHelpService,
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
      user: { user_id: this.userAuthHelpService.getUser() },
      sub: subbluedit ? { name: subbluedit } : null,
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
}
