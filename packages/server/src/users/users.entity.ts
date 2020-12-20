import * as bcrypt from 'bcrypt';
import { PostEntity } from 'src/posts/posts.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
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

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
