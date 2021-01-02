import { CacheModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { AppModule } from './../app.module';
import { SubblueditResolver } from './subbluedit.resolver';
import { SubblueditService } from './subbluedit.service';
import { SubEntity } from './subluedit.entity';

describe('SubblueditResolver', () => {
  let resolver: SubblueditResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule.forRoot({ connectionType: 'test' }),
        TypeOrmModule.forFeature([SubEntity]),
        CacheModule.register({ store: redisStore }),
      ],
      providers: [SubblueditResolver, SubblueditService],
    }).compile();

    resolver = await module.resolve<SubblueditResolver>(SubblueditResolver);
  });
  afterAll(async () => {});

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  it('should be created', () => {
    expect(resolver.createSub({ displayName: 'onetwo', name: '' })).toBe(null);
  });
});
