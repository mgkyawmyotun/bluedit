import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { GraphQLUserContext } from '../users/users';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}

  public async getPosts() {
    const posts = await this.postRepository.find({ relations: ['sub'] });
    return posts;
  }
}
