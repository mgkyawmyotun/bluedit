import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../users/users.entity';
import { PostEntity } from './../posts/posts.entity';

@Entity({ name: 'subluedit' })
export class SubEntity {
  @Column('varchar', { length: 100 })
  displayName: string;

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
}
