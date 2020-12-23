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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forFeature([SubEntity]),
        CacheModule.register({ store: redisStore }),
      ],
      providers: [SubblueditResolver, SubblueditService],
    }).compile();

    resolver = module.get<SubblueditResolver>(SubblueditResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
