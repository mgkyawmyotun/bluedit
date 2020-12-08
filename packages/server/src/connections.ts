import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';

const common: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  synchronize: true,
};

const DEV_CONNECTION = TypeOrmModule.forRoot({
  ...common,
  autoLoadEntities: true,
  migrations: '',
  database: 'bluedit',
});

const TEST_CONNECTION = {
  ...common,
  entities: [UserEntity],
  name: 'test',
  database: 'bluedit_test',
};
export { DEV_CONNECTION, TEST_CONNECTION };
