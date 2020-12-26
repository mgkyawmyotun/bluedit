import { postInputEditTextValidation } from '@bluedit/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { shapeError } from './../shared/shapeError';
import { UserAuthHelpService } from './../shared/userauth.service';
import { PostError, PostInputEditText } from './posts.types';

interface EditPostInteface<T> {
  post_id: string;
  name: 'images' | 'link' | 'post_text' | 'videos';
  field: T;
}
@Injectable()
export class PostEditService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private userAuthHelpService: UserAuthHelpService,
  ) {}
  async editPostText({ post_text, post_id }: PostInputEditText) {
    try {
      await postInputEditTextValidation.validate({ post_text, post_id });
    } catch (error) {
      return shapeError(error);
    }
    return this.editPost<typeof post_text>({
      post_id,
      name: 'post_text',
      field: post_text,
    });
  }
  async editPostLink({}) {}
  async editPost<T>({
    post_id,
    name,
    field,
  }: EditPostInteface<T>): Promise<PostError> {
    try {
      await this.postRepository.update(
        { post_id, user: { user_id: this.userAuthHelpService.getUser() } },
        { [name]: field },
      );
    } catch (error) {
      return {
        message: 'error at editing post',
        path: 'edit-post',
      };
    }
  }
}
