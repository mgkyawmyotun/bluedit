import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
