import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { IsAuthGuard } from 'src/shared/is-auth.guard';
import { VOTE_ADDED } from '../shared/gql.contstant';
import { pubSub } from './../shared/GraphqlPubSub';
import { VoteService } from './vote.service';
import { Vote, VoteError } from './vote.type';
@Resolver()
export class VoteResolver {
  constructor(private voteService: VoteService) {}
  @Mutation(returns => VoteError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async addVote(@Args('voteData') voteData: Vote): Promise<VoteError | null> {
    return this.voteService.addVote(voteData);
  }

  @Query(returns => Boolean, { nullable: false })
  @UseGuards(IsAuthGuard)
  async isVoted(@Args('post_id') post_id: string) {
    return this.voteService.isVoted({ post_id });
  }

  @Subscription(returns => Number)
  voteAdded(@Args('post_id') post_id: string) {
    return pubSub.asyncIterator(VOTE_ADDED + post_id);
  }
}
