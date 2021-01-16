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
    const posts = await this.postRepository.find({
      relations: ['sub', 'user'],
    });
    this.postsCacheService.setPosts(posts);
    return posts;
  }

  public async getPost(post_id: string) {
    const post = await this.postRepository.findOne(post_id, {
      relations: ['sub', 'user'],
    });
    // console.log(post);
    return post;
  }
}
