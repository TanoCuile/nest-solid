import { Test, TestingModule } from '@nestjs/testing';
import { TimeSheet.DatabaseService } from './time-sheet.database.service';

describe('TimeSheet.DatabaseService', () => {
  let service: TimeSheet.DatabaseService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeSheet.DatabaseService],
    }).compile();
    service = module.get<TimeSheet.DatabaseService>(TimeSheet.DatabaseService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
