import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ErrorInterface } from '../shared/types';

@ObjectType()
export class Sub {
  @Field(type => String)
  displayName: string;
  @Field(type => String)
  name: string;
  @Field(type => String, { nullable: true })
  picture_url?: string;
}
@ObjectType({ implements: () => [ErrorInterface] })
export class SubError implements ErrorInterface {
  path: string;
  message: string;
}

@InputType()
export class SubInput {
  @Field(type => String)
  displayName: string;
  @Field(type => String)
  name: string;
}
@InputType()
export class SubSearchInput {
  @Field(type => String)
  search_value: string;
  @Field(type => Number, { nullable: true })
  limit?: number;
}
@ObjectType()
export class JoinSub {
  @Field(type => Sub)
  sub: Sub;
}
