import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { UserAuthHelpService } from './../shared/userauth.service';

@Injectable()
export class PostDeleteService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private userAuthHelpService: UserAuthHelpService,
  ) {}
  deletePost(post_id: string) {
    try {
      this.postRepository.delete({
        post_id: post_id,
        user: { user_id: this.userAuthHelpService.getUser() },
      });
    } catch (error) {}
  }
}
