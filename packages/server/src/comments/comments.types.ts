import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ErrorInterface } from '../shared/types';
import { User } from '../users/users.type';

@ObjectType()
export class Comment {
  @Field(type => String)
  comment_text: string;
  @Field(type => String)
  comment_id: string;
  @Field(type => User)
  user: User;
}

@ObjectType({ implements: () => [ErrorInterface] })
export class CommentError implements ErrorInterface {
  path: string;
  message: string;
}

@InputType()
export class CommentInput {
  @Field(type => String)
  comment_text: string;

  @Field(type => String)
  post_id: string;
}

@InputType()
export class CommentEditInput {
  @Field(type => String)
  comment_text: string;

  @Field(type => String)
  comment_id: string;
}
