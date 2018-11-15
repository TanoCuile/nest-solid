import { Injectable } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../../time-sheet-management/interfaces/time-sheet.database.interface';
import { TimeSlot } from '../../../time-sheet/classes/time-slot';
import { TimeConfiguration } from '../../../time-sheet/classes/time-configuration';

@Injectable()
export class TimeSheetDatabaseService implements TimeSheetDatabaseInterface {
  async getDayTimeSlots(): Promise<TimeSlot[]> {
    return [];
  }

  async getTimeSheetConfiguration(): Promise<TimeConfiguration> {
    return new TimeConfiguration();
  }
}
