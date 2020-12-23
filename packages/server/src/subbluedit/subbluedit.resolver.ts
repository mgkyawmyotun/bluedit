import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IsAuthGuard } from '../shared/is-auth.guard';
import { SubblueditService } from './subbluedit.service';
import { SubError, SubInput } from './subbluedit.types';

@Resolver()
export class SubblueditResolver {
  constructor(private subService: SubblueditService) {}
  @Mutation(returns => SubError, { nullable: true, name: 'createSubBluedit' })
  @UseGuards(IsAuthGuard)
  createSub(@Args('subInput') sub: SubInput) {
    return this.subService.createSub(sub);
  }
}
