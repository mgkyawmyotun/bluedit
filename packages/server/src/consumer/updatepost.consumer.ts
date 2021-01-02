import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import { PostsCacheService } from '../cacheController/post.cache.service';
import { PostEntity } from '../posts/posts.entity';
import { update_p } from './consumer.name';

@Processor(update_p)
export class UpdatePostConsumer {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private postsCacheService: PostsCacheService,
  ) {}
  @Process()
  async updatePost(job: Job) {
    const posts = await this.postRepository.find({
      relations: ['sub', 'user'],
    });
    this.postsCacheService.updatePosts(posts);
  }
}
