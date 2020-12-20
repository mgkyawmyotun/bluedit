import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './../users/users.entity';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  post_id: string;

  @Column('text')
  post_text: string;

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'text' })
  link: string;

  @ManyToOne(
    () => UserEntity,
    user => user.posts,
  )
  user: UserEntity;
  @Column('simple-array')
  images: string[];
  @Column('simple-array')
  videos: string[];
}
