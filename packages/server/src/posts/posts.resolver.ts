import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IsAuthGuard } from './../shared/is-auth.guard';
import { VoteService } from './../vote/vote.service';
import { Vote } from './../vote/vote.type';
import { CreatePostService } from './createposts.service';
import { PostDeleteService } from './deleteposts.service';
import { PostEditService } from './editposts.service';
import { PostsService } from './posts.service';
import {
  Post,
  PostError,
  PostInputEditLink,
  PostInputEditText,
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
    private voteService: VoteService,
    private postDeleteService: PostDeleteService,
    private postEditService: PostEditService,
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
  @Mutation(returns => Number, { nullable: true })
  @UseGuards(IsAuthGuard)
  async addVote(@Args('voteData') voteData: Vote): Promise<number | null> {
    return this.voteService.addVote(voteData);
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async deletePost(
    @Args('post_id') post_id: string,
  ): Promise<PostError | null> {
    return this.postDeleteService.deletePost(post_id);
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async editPostMarkDown(
    @Args('postEditInput') postEditInput: PostInputEditText,
  ): Promise<PostError | null> {
    return this.postEditService.editPostText(postEditInput);
  }
  @Mutation(returns => PostError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async editPostLink(
    @Args('postEditInput') postEditInput: PostInputEditLink,
  ): Promise<PostError | null> {
    return this.postEditService.editPostLink(postEditInput);
  }
}
