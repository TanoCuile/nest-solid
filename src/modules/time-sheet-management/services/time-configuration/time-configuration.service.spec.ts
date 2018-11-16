import { Test, TestingModule } from '@nestjs/testing';
import { TimeConfigurationService } from './time-configuration.service';

describe('TimeConfigurationService', () => {
  let service: TimeConfigurationService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeConfigurationService],
    }).compile();
    service = module.get<TimeConfigurationService>(TimeConfigurationService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
