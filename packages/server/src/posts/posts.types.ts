import {
  Field,
  InputType,
  InterfaceType,
  ObjectType,
  PartialType,
} from '@nestjs/graphql';
@InterfaceType()
export abstract class PostInteface {
  @Field(type => String)
  post_id: string;

  @Field(type => String, { nullable: true })
  post_text?: string;

  @Field(type => String, { nullable: false })
  title: string;

  @Field(type => String, { nullable: true })
  link?: string;

  @Field(type => [String], { nullable: true })
  images?: string[];

  @Field(type => [String], { nullable: true })
  videos?: string[];
}
@ObjectType({ implements: PostInteface })
export class Post {}

@InputType()
export class PostInput {
  @Field(type => String, { nullable: false })
  title: string;
}

@InputType()
export class PostInputMarkDown extends PartialType(PostInput) {
  @Field(type => String, { nullable: false })
  post_text: string;
}

@InputType()
export class PostInputLink extends PartialType(PostInput) {
  @Field(type => String, { nullable: false })
  link: string;
}
@ObjectType()
export class PostError {
  @Field(type => String)
  message: string;

  @Field(type => String)
  path: string;
}
