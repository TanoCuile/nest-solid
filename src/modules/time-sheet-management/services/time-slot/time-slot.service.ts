import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { CreteriaType } from '../../../data-base/types/creteria.type';
import { TimeSlotServiceInterface } from '../../interfaces/time-slot-service.interface';

@Injectable()
export class TimeSlotService implements TimeSlotServiceInterface {
  constructor(@Inject('TimeSlotDatabase') protected database: TimeSlotServiceInterface) {}

  getAllTimeSlotsPerDayCreteria(day: number): CreteriaType<TimeSlotInterface> {
    return {
      day,
    } as CreteriaType<TimeSlotInterface>;
  }

  async create(slot: TimeSlotInterface) {
    return this.database.create(slot);
  }

  async update(slot: TimeSlotInterface) {
    return this.database.update(slot);
  }

  async delete(slot: TimeSlotInterface) {
    return this.database.delete(slot);
  }
}
