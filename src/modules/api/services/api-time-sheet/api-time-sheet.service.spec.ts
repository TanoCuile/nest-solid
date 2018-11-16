import { Test, TestingModule } from '@nestjs/testing';
import { ApiTimeSheetService } from './api-time-sheet.service';

describe('ApiTimeSheetService', () => {
  let service: ApiTimeSheetService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiTimeSheetService],
    }).compile();
    service = module.get<ApiTimeSheetService>(ApiTimeSheetService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
