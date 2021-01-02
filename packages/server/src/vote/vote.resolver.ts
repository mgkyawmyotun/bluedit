import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IsAuthGuard } from 'src/shared/is-auth.guard';
import { VoteService } from './vote.service';
import { Vote } from './vote.type';

@Resolver()
export class VoteResolver {
  constructor(private voteService: VoteService) {}
  @Mutation(returns => Number, { nullable: true })
  @UseGuards(IsAuthGuard)
  async addVote(@Args('voteData') voteData: Vote): Promise<number | null> {
    return this.voteService.addVote(voteData);
  }
  @Query(returns => Boolean, { nullable: false })
  async isVoted(@Args('post_id') post_id: string) {
    return this.voteService.isVoted({ post_id });
  }
}
