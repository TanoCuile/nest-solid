import { Test, TestingModule } from '@nestjs/testing';
import { TextDataBaseService } from './text-data-base.service';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { TimeSlot } from '../../classes/time-slot';

describe('TextDataBaseService', () => {
  let service: TextDataBaseService<TimeSlotInterface>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { useFactory: () => new TextDataBaseService<TimeSlotInterface>('slot_test', TimeSlot), provide: 'TextDataBaseService' },
      ],
    }).compile();
    service = module.get<TextDataBaseService<TimeSlotInterface>>('TextDataBaseService');
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
