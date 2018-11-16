import { Test, TestingModule } from '@nestjs/testing';
import {} from 'jasmine';
import { TimeSheetModule } from '../../../time-sheet/time-sheet.module';
import { MockDataBaseModule } from '../../../../test/mock/mock-data-base.module';
import { TimeSlotService } from './time-slot.service';

describe('FreeTimeService', () => {
  let service: TimeSlotService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockDataBaseModule, TimeSheetModule],
      providers: [TimeSlotService],
    }).compile();
    service = module.get<TimeSlotService>(TimeSlotService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
