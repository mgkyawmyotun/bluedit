import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IsAuthGuard } from './../shared/is-auth.guard';
import { PostsService } from './posts.service';
import { PostError, PostInputMarkDown } from './posts.types';

@Resolver()
export class PostResolver {
  constructor(private postService: PostsService) {}
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async createPostWithMarkDown(
    @Args('postData') postData: PostInputMarkDown,
  ): Promise<PostError | null> {
    return this.postService.createPostMarkDown(postData);
  }
}
