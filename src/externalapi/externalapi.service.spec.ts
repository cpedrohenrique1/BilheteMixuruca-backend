import { Test, TestingModule } from '@nestjs/testing';
import { ExternalapiService } from './externalapi.service';

describe('ExternalapiService', () => {
  let service: ExternalapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalapiService],
    }).compile();

    service = module.get<ExternalapiService>(ExternalapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
