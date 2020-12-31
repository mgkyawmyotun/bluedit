import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';

@Injectable()
export class PostsService {
  private getPostCacheKey = 'post/getPosts';
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  private logger: Logger = new Logger('postService');

  public async getPosts() {
    const postsCache = await this.cacheManager.get<PostEntity[]>(
      this.getPostCacheKey,
    );
    if (postsCache) {
      return postsCache;
    }
    const posts = await this.postRepository.find({
      relations: ['sub', 'user'],
    });
    this.cacheManager.set(this.getPostCacheKey, posts, { ttl: 60 * 60 * 24 });
    return posts;
  }
}
