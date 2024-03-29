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
  @Field(type => String, { nullable: false })
  created_at: string;
}

@ObjectType()
export class CommentUser {
  @Field(type => String)
  comment_text: string;
  @Field(type => String)
  comment_id: string;
  @Field(type => String, { nullable: false })
  created_at: string;
  @Field(type => String, { nullable: false })
  post_id: string;
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
