import { Test, TestingModule } from '@nestjs/testing';
import { ApiTimeSheetService } from './api-time-sheet.service';
import { MockDataBaseModule } from '../../../../test/mock/mock-data-base.module';

describe('ApiTimeSheetService', () => {
  let service: ApiTimeSheetService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockDataBaseModule],
      providers: [ApiTimeSheetService],
    }).compile();
    service = module.get<ApiTimeSheetService>(ApiTimeSheetService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
