import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ErrorInterface } from 'src/shared/types';

@ObjectType()
export class SubEntity {
  @Field(type => String)
  sub_id: string;
  @Field(type => String)
  displayName: string;
  @Field(type => String)
  name: string;
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
