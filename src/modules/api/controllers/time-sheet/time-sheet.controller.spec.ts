import { Test, TestingModule } from '@nestjs/testing';
import { TimeSheetController } from './time-sheet.controller';
import {} from 'jasmine';

describe('TimeSheet Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TimeSheetController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TimeSheetController = module.get<TimeSheetController>(TimeSheetController);
    expect(controller).toBeDefined();
  });
});
