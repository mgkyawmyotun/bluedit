import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './../users/users.entity';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  post_id: string;
  @ManyToOne(
    () => UserEntity,
    user => user.posts,
  )
  user: UserEntity;
}
