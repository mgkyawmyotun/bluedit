import { Column, Entity, ManyToOne } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { UserEntity } from '../users/users.entity';
import { VoteType } from './vote.type';

@Entity({ name: 'votes' })
export class VoteEntity {
  // @PrimaryColumn()
  // vote_id: number;
  @ManyToOne(
    () => UserEntity,
    user => user.votes,
    { primary: true },
  )
  user: UserEntity;
  @ManyToOne(
    () => PostEntity,
    post => post.votes,
    { primary: true },
  )
  post: PostEntity;
  @Column('enum', { nullable: true, enum: VoteType, enumName: 'VoteType' })
  vote_type: VoteType;
}
