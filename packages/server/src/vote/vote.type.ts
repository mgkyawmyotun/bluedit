import { Field, InputType, registerEnumType } from '@nestjs/graphql';
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
