import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => String)
  displayName: string;

  @Field(type => String)
  username: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}

@InputType()
export class UserInputType extends User {
  @Field(type => String)
  displayName: string;

  @Field(type => String)
  username: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}

@ObjectType()
export class Error {
  @Field(type => String)
  path: string;
  @Field(type => String)
  message: string;
}
