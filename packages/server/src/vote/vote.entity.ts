import { PostEntity } from 'src/posts/posts.entity';
import { UserEntity } from 'src/users/users.entity';
import { Entity, ManyToOne } from 'typeorm';

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
