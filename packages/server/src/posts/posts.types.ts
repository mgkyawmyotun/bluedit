import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Post {
  @Field(type => String)
  post_id: string;

  @Field(type => String)
  post_text: string;

  @Field(type => String)
  title: string;

  @Field(type => [String])
  link: string;

  @Field(type => [String])
  images: string[];

  @Field(type => [String])
  videos: string[];
}
