import { Test, TestingModule } from '@nestjs/testing';
import { FreeTimeService } from './free-time.service';
import {} from 'jasmine';

describe('FreeTimeService', () => {
  let service: FreeTimeService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [FreeTimeService],
    }).compile();
    service = module.get<FreeTimeService>(FreeTimeService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
