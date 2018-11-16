import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { CreteriaType } from '../../../data-base/types/creteria.type';
import { TextDataBaseService } from '../../../data-base/services/text-data-base/text-data-base.service';
import { TimeSlotServiceInterface } from '../../interfaces/time-slot-service.interface';

@Injectable()
export class TimeSlotService implements TimeSlotServiceInterface {
  constructor(@Inject('TimeSheetDatabaseInterface') protected database: TextDataBaseService<TimeSlotInterface>) {}

  getAllTimeSlotsPerDayCreteria(day: number): CreteriaType<TimeSlotInterface> {
    return {
      day,
    } as CreteriaType<TimeSlotInterface>;
  }

  async createNewTimeSlot(slot: TimeSlotInterface) {
    return this.database.create(slot);
  }

  async updateNewTimeSlot(slot: TimeSlotInterface) {
    return this.database.update(slot);
  }

  async deleteTimeSlot(slot: TimeSlotInterface) {
    return this.database.delete(slot);
  }
}
