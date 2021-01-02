import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { VoteType } from 'src/vote/vote.type';
import { Repository } from 'typeorm';
import { PostsCacheService } from './../cacheController/post.cache.service';
import { VOTE_ADDED } from './../shared/gql.contstant';
import { pubSub } from './../shared/GraphqlPubSub';
import { PostEntity } from './posts.entity';
export const update_v_c = 'updateVoteCount';
export interface UpdateVoteCountInteface {
  post_id?: string;
  TYPE: VoteType;
}
@Processor(update_v_c)
export class UpdateVoteCountConsumer {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private postsCacheService: PostsCacheService,
  ) {}
  @Process()
  async updateVoteCount(job: Job<UpdateVoteCountInteface>) {
    const { TYPE, post_id } = job.data;
    await this.postRepository.update(
      { post_id: post_id },
      {
        vote_count: () =>
          TYPE == VoteType.UP ? 'vote_count + 1' : 'vote_count - 1',
      },
    );
    const { vote_count } = await this.postRepository.findOne(post_id, {
      select: ['vote_count'],
    });
    pubSub.publish(VOTE_ADDED + post_id, {
      voteAdded: vote_count < 0 ? 0 : vote_count,
    });

    const posts = await this.postRepository.find({
      relations: ['sub', 'user'],
    });
    this.postsCacheService.updatePosts(posts);
  }
}
