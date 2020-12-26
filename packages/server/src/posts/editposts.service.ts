import {
  postInputEditLinkValidation,
  postInputEditTextValidation,
} from '@bluedit/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { shapeError } from './../shared/shapeError';
import { UserAuthHelpService } from './../shared/userauth.service';
import { PostError, PostInputEditLink, PostInputEditText } from './posts.types';

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
  async editPostLink({ post_link, post_id }: PostInputEditLink) {
    try {
      await postInputEditLinkValidation.validate({ post_id, post_link });
    } catch (error) {
      return shapeError(error);
    }
    return this.editPost<typeof post_link>({
      post_id,
      name: 'link',
      field: post_link,
    });
  }
  async editPost<T>({
    post_id,
    name,
    field,
  }: EditPostInteface<T>): Promise<PostError> {
    try {
      // await this.postRepository.update(
      //   {
      //     post_id,
      //     user: { user_id: this.userAuthHelpService.getUser() },
      //   },
      //   { [name]: field },
      // );
      const res = await this.postRepository
        .createQueryBuilder()
        .update({ [name]: field })
        .where('post_id =:post_id', { post_id })
        .andWhere('userUserId =:userId', {
          userId: this.userAuthHelpService.getUser(),
        })
        .andWhere(`${name} is not null`)
        .execute();
      if (res.affected === 0) {
        throw new Error();
      }
    } catch (error) {
      return {
        message: 'error at editing post',
        path: 'edit-post',
      };
    }
  }
}
