import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment, CommentError, CommentInput } from './comments.types';

@Resolver()
export class CommentsResolver {
  constructor(private commentService: CommentsService) {}
  @Mutation(returns => CommentError, { nullable: true })
  async createComment(
    @Args('commentInput') commentInput: CommentInput,
  ): Promise<CommentError | null> {
    return this.commentService.createComment(commentInput);
  }
  @Query(returns => [Comment], { nullable: true })
  getComments(@Args('post_id') post_id: string) {
    return this.commentService.getComments(post_id);
  }
}
