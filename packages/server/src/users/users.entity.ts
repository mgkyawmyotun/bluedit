import * as bcrypt from 'bcrypt';
import { CommentEntity } from 'src/comments/comments.entity';
import { PostEntity } from 'src/posts/posts.entity';
import { VoteEntity } from 'src/vote/vote.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubEntity } from './../subbluedit/subluedit.entity';
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column('varchar', { length: 50 })
  displayName: string;

  @Column('varchar', { length: 50 })
  username: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('text')
  password: string;
  @Column('text')
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
