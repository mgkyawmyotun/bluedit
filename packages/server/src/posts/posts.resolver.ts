import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IsAuthGuard } from './../shared/is-auth.guard';
import { CreatePostService } from './createposts.service';
import { PostsService } from './posts.service';
import {
  Post,
  PostError,
  PostInputImage,
  PostInputLink,
  PostInputMarkDown,
  PostInputVideo,
} from './posts.types';
@Resolver()
export class PostResolver {
  constructor(
    private postService: PostsService,
    private postCreateService: CreatePostService,
  ) {}
  @Query(returns => [Post])
  async getPosts() {
    return this.postService.getPosts();
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async createPostWithMarkDown(
    @Args('postData') postData: PostInputMarkDown,
  ): Promise<PostError | null> {
    return this.postCreateService.createPostMarkDown(postData);
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async createPostWithLink(
    @Args('postData') postData: PostInputLink,
  ): Promise<PostError | null> {
    return this.postCreateService.createPostLink(postData);
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async createPostWithImage(
    @Args('postData') postData: PostInputImage,
  ): Promise<PostError | null> {
    return this.postCreateService.createPostImage(postData);
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async createPostWithVideo(
    @Args('postData') postData: PostInputVideo,
  ): Promise<PostError | null> {
    return this.postCreateService.createPostVideo(postData);
  }
}
