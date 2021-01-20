import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostEntity } from '../posts/posts.entity';
import { UserEntity } from '../users/users.entity';

@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @Column('text')
  comment_text: string;

  @ManyToOne(
    () => UserEntity,
    user => user.comments,
  )
  user: UserEntity;
  @ManyToOne(
    () => PostEntity,
    post => post.comments,
  )
  post: PostEntity;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
