import { PostEntity } from 'src/posts/posts.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../users/users.entity';

@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @Column('text')
  comment_text: string;

  @ManyToOne(
    () => UserEntity,
    user => user.posts,
  )
  user: UserEntity;
  @ManyToOne(
    () => PostEntity,
    post => post.comments,
  )
  post: PostEntity;
}
