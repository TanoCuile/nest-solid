import { Test, TestingModule } from '@nestjs/testing';
import { TimeSheetDatabaseService } from './time-sheet.database.service';
import {} from 'jasmine';

describe('TimeSheet.DatabaseService', () => {
  let service: TimeSheetDatabaseService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeSheetDatabaseService],
    }).compile();
    service = module.get<TimeSheetDatabaseService>(TimeSheetDatabaseService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
