import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import { PostsCacheService } from '../cacheController/post.cache.service';
import { PostEntity } from '../posts/posts.entity';
import { COMMENT_ADDED } from './../shared/gql.contstant';
import { pubSub } from './../shared/GraphqlPubSub';
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

    try {
      const postRepo = await this.postRepository.update(
        { post_id: post_id },
        {
          comment_count: () =>
            TYPE == 'ADD' ? 'comment_count + 1' : 'comment_count - 1',
        },
      );

      const post = await this.postRepository.findOne(
        {
          post_id,
        },
        { relations: ['sub', 'user'] },
      );
      pubSub.publish(COMMENT_ADDED + post_id, {
        commentAdded: post.comment_count,
      });
      this.postsCacheService.updatePost(post);
    } catch (error) {}
  }
}
