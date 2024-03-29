import * as bcrypt from 'bcrypt';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommentEntity } from '../comments/comments.entity';
import { PostEntity } from '../posts/posts.entity';
import { VoteEntity } from '../vote/vote.entity';
import { JoinEntity } from './../subbluedit/join.entity';
import { SubEntity } from './../subbluedit/subluedit.entity';
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column('varchar', { length: 50 })
  displayName: string;

  @Column('varchar', { length: 50 })
  username: string;

  @Column('varchar', { length: 255, unique: true })
  email: string;

  @Column('text', { nullable: true })
  password: string;
  @Column('text', { nullable: true })
  picture_url: string;

  @Column('bool')
  forgetLocked: boolean;
  @OneToMany(
    () => PostEntity,
    post => post.user,
  )
  posts: PostEntity[];
  @OneToMany(
    () => SubEntity,
    sub => sub.user,
  )
  subs: SubEntity[];
  @OneToMany(
    () => JoinEntity,
    join => join.user,
  )
  joins: JoinEntity[];
  @OneToMany(
    () => VoteEntity,
    vote => vote.user,
  )
  votes: VoteEntity[];
  @OneToMany(
    () => CommentEntity,
    comment => comment.post,
  )
  comments: CommentEntity[];
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
