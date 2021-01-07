import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../users/users.entity';
import { PostEntity } from './../posts/posts.entity';
import { JoinEntity } from './join.entity';

@Entity({ name: 'subluedit' })
export class SubEntity {
  @Column('varchar', { length: 100 })
  displayName: string;
  @Column('text', { nullable: true })
  picture_url: string;

  @PrimaryColumn({ type: 'varchar', length: 100, unique: true })
  name: string;

  @ManyToOne(
    () => UserEntity,
    user => user.posts,
  )
  user: UserEntity;
  @OneToMany(
    () => PostEntity,
    post => post.sub,
  )
  posts: PostEntity[];
  @OneToMany(
    () => JoinEntity,
    join => join.sub,
  )
  joins: JoinEntity[];
}
