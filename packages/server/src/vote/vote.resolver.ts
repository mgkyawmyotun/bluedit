import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { IsAuthGuard } from 'src/shared/is-auth.guard';
import { pubSub } from './../shared/GraphqlPubSub';
import { VoteService } from './vote.service';
import { Vote } from './vote.type';
const VOTE_ADDED = 'VOTED_ADDED';
@Resolver()
export class VoteResolver {
  constructor(private voteService: VoteService) {}
  @Mutation(returns => Number, { nullable: true })
  @UseGuards(IsAuthGuard)
  async addVote(@Args('voteData') voteData: Vote): Promise<number | null> {
    return this.voteService.addVote(voteData);
  }

  @Query(returns => Boolean, { nullable: false })
  @UseGuards(IsAuthGuard)
  async isVoted(@Args('post_id') post_id: string) {
    pubSub.publish(VOTE_ADDED, { voteAdded: 20 });
    return this.voteService.isVoted({ post_id });
  }

  @Subscription(returns => Number)
  voteAdded() {
    return pubSub.asyncIterator([VOTE_ADDED]);
  }
}
