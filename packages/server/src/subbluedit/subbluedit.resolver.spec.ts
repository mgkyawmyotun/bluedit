import { Test, TestingModule } from '@nestjs/testing';
import { SubblueditResolver } from './subbluedit.resolver';

describe('SubblueditResolver', () => {
  let resolver: SubblueditResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubblueditResolver],
    }).compile();

    resolver = module.get<SubblueditResolver>(SubblueditResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
