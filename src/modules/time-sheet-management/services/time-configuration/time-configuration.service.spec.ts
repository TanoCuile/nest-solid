import { Test, TestingModule } from '@nestjs/testing';
import { TimeConfigurationService } from './time-configuration.service';
import { MockDataBaseModule } from '../../../../test/mock/mock-data-base.module';

describe('TimeConfigurationService', () => {
  let service: TimeConfigurationService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockDataBaseModule],
      providers: [TimeConfigurationService],
    }).compile();
    service = module.get<TimeConfigurationService>(TimeConfigurationService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
