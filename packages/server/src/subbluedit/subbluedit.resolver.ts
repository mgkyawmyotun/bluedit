import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IsAuthGuard } from '../shared/is-auth.guard';
import { SubblueditService } from './subbluedit.service';
import {
  JoinSub,
  Sub,
  SubError,
  SubInput,
  SubSearchInput,
} from './subbluedit.types';

@Resolver()
export class SubblueditResolver {
  constructor(private subService: SubblueditService) {}
  @Mutation(returns => SubError, { nullable: true, name: 'createSubBluedit' })
  @UseGuards(IsAuthGuard)
  createSub(@Args('subInput') sub: SubInput) {
    return this.subService.createSub(sub);
  }
  @Mutation(returns => SubError, { nullable: true, name: 'joinSubBluedit' })
  @UseGuards(IsAuthGuard)
  joinSub(@Args('subName') subName: string) {
    return this.subService.joinSub(subName);
  }
  @Mutation(returns => SubError, { nullable: true, name: 'leaveSub' })
  @UseGuards(IsAuthGuard)
  leaveSub(@Args('subName') subName: string) {
    return this.subService.leaveSub(subName);
  }
  @Query(returns => [JoinSub], { nullable: true })
  async getJoinSub() {
    return this.subService.getJoinSub();
  }
  @Query(returns => [Sub], { nullable: true })
  async getUserJoinedSub(@Args('username') username: string) {
    return this.subService.getUserJoinedSub(username);
  }
  @Query(returns => Sub, { nullable: true })
  async getSub(@Args('subName') subName: string) {
    return this.subService.getSub(subName);
  }
  @Query(returns => Boolean)
  async isJoin(@Args('subName') subName: string) {
    return this.subService.isJoin(subName);
  }
  @Query(returns => [Sub], { nullable: true })
  async getSubs(@Args('subInput') subInput: SubSearchInput) {
    return this.subService.getSubs(subInput);
  }
}
