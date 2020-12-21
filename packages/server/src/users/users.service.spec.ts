import {
  Connection,
  createConnection,
  getRepository,
  Repository,
} from 'typeorm';
import { TEST_CONNECTION } from '../connections';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let conn: Connection;
  let userRepo: Repository<UserEntity>;
  let userService: UsersService;
  beforeEach(async () => {
    conn = await createConnection(TEST_CONNECTION);
    userRepo = getRepository(UserEntity, 'test');
    // userService = new UsersService(userRepo);
  });
  afterEach(async () => {
    await conn.close();
  });
  it('is defined?', () => {
    expect(userService).toBeDefined();
  });
});
