import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ErrorInterface } from 'src/shared/types';

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

@ObjectType({ implements: () => [ErrorInterface] })
export class UserError implements ErrorInterface {
  path: string;
  message: string;
}
@InputType()
export class UserLoginInput {
  @Field(type => String)
  email;
  @Field(type => String)
  password: string;
}

@InputType()
export class UserProfileFaceBook {
  @Field(type => String)
  email;
  @Field(type => String)
  name: string;
  @Field(type => String)
  accessToken: string;
  @Field(type => String)
  profile_url: string;
}

@InputType()
export class ForgetPasswordChange {
  @Field(type => String)
  newPassword: string;
  @Field(type => String)
  key: string;
}
