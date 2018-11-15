import { TimeSlot } from '../../time-sheet/classes/time-slot';
import { TimeConfiguration } from '../../time-sheet/classes/time-configuration';

export interface TimeSheetDatabaseInterface {
  getDayTimeSlots(): Promise<TimeSlot[]>;
  getTimeSheetConfiguration(): Promise<TimeConfiguration>;
}
