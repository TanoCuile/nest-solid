import { Test, TestingModule } from '@nestjs/testing';
import { TimeSlotController } from './time-slot.controller';
import { FreeTimeService } from '../../services/free-time/free-time.service';
import {} from 'jasmine';
import { MockDataBaseModule } from '../../test/mock/mock-data-base.module';

describe('TimeSlot Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [MockDataBaseModule],
      controllers: [TimeSlotController],
      providers: [FreeTimeService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TimeSlotController = module.get<TimeSlotController>(TimeSlotController);
    expect(controller).toBeDefined();
  });
});
