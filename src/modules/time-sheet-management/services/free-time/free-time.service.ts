import { Injectable, Inject } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../interfaces/time-sheet.database.interface';

@Injectable()
export class FreeTimeService {
  constructor(@Inject('TimeSheetDatabaseInterface') protected database: TimeSheetDatabaseInterface) {}

  getFreeTime() {
    const slots = this.database.getDayTimeSlots();
    const config = this.database.getTimeSheetConfiguration();
    return { slots, config };
  }
}
