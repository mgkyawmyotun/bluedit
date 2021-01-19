import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { COMMENT_ADDED, NEW_COMMENT_ADDED } from './../shared/gql.contstant';
import { pubSub } from './../shared/GraphqlPubSub';
import { IsAuthGuard } from './../shared/is-auth.guard';
import { CommentsService } from './comments.service';
import {
  Comment,
  CommentEditInput,
  CommentError,
  CommentInput,
} from './comments.types';

@Resolver()
export class CommentsResolver {
  constructor(private commentService: CommentsService) {}
  @Mutation(returns => CommentError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async createComment(
    @Args('commentInput') commentInput: CommentInput,
  ): Promise<CommentError | null> {
    return this.commentService.createComment(commentInput);
  }
  @Mutation(returns => CommentError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async editComment(
    @Args('editCommentInput') editCommentInput: CommentEditInput,
  ): Promise<CommentError | null> {
    return this.commentService.editComment(editCommentInput);
  }
  @Mutation(returns => CommentError, { nullable: true })
  @UseGuards(IsAuthGuard)
  async deleteComment(
    @Args('comment_id') comment_id: string,
  ): Promise<CommentError | null> {
    return this.commentService.deleteComment(comment_id);
  }
  @Query(returns => [Comment], { nullable: true })
  getComments(@Args('post_id') post_id: string) {
    return this.commentService.getComments(post_id);
  }
  @Subscription(returns => Number)
  commentAdded(@Args('post_id') post_id: string) {
    return pubSub.asyncIterator(COMMENT_ADDED + post_id);
  }
  @Subscription(returns => Comment)
  newCommentAdded(@Args('post_id') post_id: string) {
    return pubSub.asyncIterator(NEW_COMMENT_ADDED + post_id);
  }
}
