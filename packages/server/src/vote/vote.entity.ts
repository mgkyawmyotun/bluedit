import { Entity, ManyToOne } from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { UserEntity } from '../users/users.entity';

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
}
