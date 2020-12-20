import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostError, PostInputMarkDown } from './posts.types';

@Resolver()
export class PostResolver {
  constructor(private postService: PostsService) {}
  @Mutation(returns => PostError, { nullable: true })
  createPostWithMarkDown(
    @Args('postData') postData: PostInputMarkDown,
  ): PostError {
    this.postService.createPostMarkDown(postData);
    return {
      message: 'Error',
      path: 'errro',
    };
  }
}
