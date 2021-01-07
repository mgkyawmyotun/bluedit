import { Entity, ManyToOne } from 'typeorm';
import { UserEntity } from './../users/users.entity';
import { SubEntity } from './subluedit.entity';
@Entity()
export class JoinEntity {
  @ManyToOne(
    () => UserEntity,
    user => user.joins,
    { primary: true },
  )
  user: UserEntity;
  @ManyToOne(
    () => SubEntity,
    sub => sub.joins,
    { primary: true },
  )
  sub: SubEntity;
}
