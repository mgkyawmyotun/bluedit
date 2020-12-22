import { Field, InterfaceType } from '@nestjs/graphql';
@InterfaceType()
export abstract class ErrorInterface {
  @Field(type => String)
  path: string;
  @Field(type => String)
  message: string;
}
