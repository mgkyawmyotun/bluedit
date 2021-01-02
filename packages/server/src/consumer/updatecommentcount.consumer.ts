import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import { PostsCacheService } from '../cacheController/post.cache.service';
import { PostEntity } from '../posts/posts.entity';
import { update_c_c } from './consumer.name';
export interface UpdateCommentCountInterface {
  post_id?: string;
  TYPE: 'DELETE' | 'ADD';
}
@Processor(update_c_c)
export class UpdateCommentConsumer {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private postsCacheService: PostsCacheService,
  ) {}
  @Process()
  async updateCommentCount(job: Job<UpdateCommentCountInterface>) {
    const { TYPE, post_id } = job.data;

    await this.postRepository.update(
      { post_id: post_id },
      {
        comment_count: () =>
          TYPE == 'ADD' ? 'comment_count + 1' : 'comment_count - 1',
      },
    );
    const posts = await this.postRepository.find({
      relations: ['sub', 'user'],
    });
    this.postsCacheService.updatePosts(posts);
  }
}
