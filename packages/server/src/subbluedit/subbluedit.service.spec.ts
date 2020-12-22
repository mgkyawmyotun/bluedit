import { Test, TestingModule } from '@nestjs/testing';
import { SubblueditService } from './subbluedit.service';

describe('SubblueditService', () => {
  let service: SubblueditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubblueditService],
    }).compile();

    service = module.get<SubblueditService>(SubblueditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
