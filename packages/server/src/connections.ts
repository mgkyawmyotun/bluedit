import { TypeOrmModule } from '@nestjs/typeorm';

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

  // debug: true,
  dropSchema: true,
});

const TEST_CONNECTION = TypeOrmModule.forRoot({
  ...common,
  autoLoadEntities: true,
  migrations: '',
  database: 'bluedit_test',
  dropSchema: true,
});

export { DEV_CONNECTION, TEST_CONNECTION };
