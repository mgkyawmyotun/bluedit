import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  displayName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
