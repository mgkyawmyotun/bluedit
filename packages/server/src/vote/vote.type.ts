import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { ErrorInterface } from './../shared/types';
export enum VoteType {
  UP,
  DOWN,
}
registerEnumType(VoteType, { name: 'VoteType' });
@InputType()
export class Vote {
  @Field(type => VoteType, { nullable: false })
  voteType: VoteType;
  @Field(type => String, { nullable: false })
  post_id: string;
}
@ObjectType({ implements: () => [ErrorInterface] })
export class VoteError implements ErrorInterface {
  path: string;
  message: string;
}
