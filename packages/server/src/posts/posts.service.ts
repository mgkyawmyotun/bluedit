import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { PostsCacheService } from './../cacheController/post.cache.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private postsCacheService: PostsCacheService,
  ) {}
  private logger: Logger = new Logger('postService');

  public async getPosts() {
    const postsCache = await this.postsCacheService.getPosts();
    if (postsCache) {
      return postsCache;
    }
    const posts = await this.set_cache_and_get_db_result();
    return posts;
  }

  public async getPost(post_id: string) {
    try {
      const post = await this.postRepository.findOne(post_id, {
        relations: ['sub', 'user'],
      });
      return post;
    } catch (error) {
      return null;
    }
  }

  public async getPostByUser(name: string) {
    try {
      const postsCache = await this.postsCacheService.getPosts();
      if (postsCache) {
        return postsCache.filter(x => x.user.username === name);
      }
      const posts = await this.set_cache_and_get_db_result();
      return posts.filter(x => x.user.username === name);
    } catch (error) {
      return null;
    }
  }
  private async set_cache_and_get_db_result() {
    const posts = await this.postRepository.find({
      relations: ['sub', 'user'],
    });
    this.postsCacheService.setPosts(posts);
    return posts;
  }
}
