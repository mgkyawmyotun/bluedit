import {
  Field,
  InputType,
  InterfaceType,
  ObjectType,
  PartialType,
} from '@nestjs/graphql';
import { ErrorInterface } from '../shared/types';
import { Sub } from './../subbluedit/subbluedit.types';
import { User } from './../users/users.type';
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
  @Field(type => Sub, { nullable: true })
  sub?: Sub;
  @Field(type => Number, { nullable: false })
  vote_count: number;
  @Field(type => [String], { nullable: true })
  images?: string[];

  @Field(type => [String], { nullable: true })
  videos?: string[];
  @Field(type => User, { nullable: false })
  user: User;
}
@ObjectType({ implements: PostInteface })
export class Post {}

@InputType()
export class PostInput {
  @Field(type => String, { nullable: false })
  title: string;
  @Field(type => String, { nullable: true })
  subbluedit?: string;
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
@InputType()
export class PostInputImage extends PartialType(PostInput) {
  @Field(type => [String], { nullable: false })
  images: string[];
}
@InputType()
export class PostInputVideo extends PartialType(PostInput) {
  @Field(type => [String], { nullable: true })
  videos: string[];
}
@ObjectType({ implements: () => [ErrorInterface] })
export class PostError implements ErrorInterface {
  path: string;
  message: string;
}
@InputType()
export class PostInputEdit {
  @Field(type => String, { nullable: false })
  post_id: string;
}

@InputType()
export class PostInputEditText extends PartialType(PostInputEdit) {
  @Field(type => String, { nullable: false })
  post_text: string;
}
@InputType()
export class PostInputEditLink extends PartialType(PostInputEdit) {
  @Field(type => String, { nullable: false })
  post_link: string;
}
