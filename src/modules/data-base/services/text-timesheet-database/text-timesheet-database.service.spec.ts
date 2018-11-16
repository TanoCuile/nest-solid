import { Test, TestingModule } from '@nestjs/testing';
import { TextTimesheetDatabaseService } from './text-timesheet-database.service';
import {} from 'jasmine';

describe('TextTimesheetDatabaseService', () => {
  let service: TextTimesheetDatabaseService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextTimesheetDatabaseService],
    }).compile();
    service = module.get<TextTimesheetDatabaseService>(TextTimesheetDatabaseService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
