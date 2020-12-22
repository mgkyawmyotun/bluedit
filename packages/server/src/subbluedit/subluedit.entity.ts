import { UserEntity } from 'src/users/users.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostEntity } from './../posts/posts.entity';

@Entity({ name: 'subluedit' })
export class SubEntity {
  @PrimaryGeneratedColumn('uuid')
  sub_id: string;

  @Column('varchar', { length: 100 })
  displayName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
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
