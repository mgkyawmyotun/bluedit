import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PostEntity } from './../posts/posts.entity';
import { KEYS } from './cacheKeys';
@Injectable()
export class PostsCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  public setPosts(posts: PostEntity[]): void {
    this.cacheManager.set(KEYS.POSTS, posts, { ttl: 60 * 60 * 24 });
  }
  public getPosts(): Promise<PostEntity[]> {
    return this.cacheManager.get<PostEntity[]>(KEYS.POSTS);
  }
  public updatePosts(posts: PostEntity[]): void {
    this.setPosts(posts);
  }
  public deletePosts() {
    return this.cacheManager.del(KEYS.POSTS);
  }
  public async updatePost(post: PostEntity) {
    const posts = await this.getPosts();
    const index = posts.findIndex(old_post => old_post.post_id == post.post_id);
    posts[index] = post;
    this.updatePosts(posts);
  }
}
