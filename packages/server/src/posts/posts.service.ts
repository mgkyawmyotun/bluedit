import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { PostEntity } from 'src/posts/posts.entity';
import { GraphQLUserContext } from 'src/users/users';
import { Repository } from 'typeorm';
import { PostInputMarkDown } from './posts.types';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}

  async createPostMarkDown(post: PostInputMarkDown) {
    // this.postRepository.create({post_id})
  }
}
