import { Test, TestingModule } from '@nestjs/testing';
import { TimeSlotController } from './time-slot.controller';

describe('TimeSlot Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TimeSlotController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TimeSlotController = module.get<TimeSlotController>(TimeSlotController);
    expect(controller).toBeDefined();
  });
});
