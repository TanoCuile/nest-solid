import { TimeSlotInterface } from '../../time-sheet/interfaces/time-slot.interface';
import { TimeConfigurationInterface } from '../../time-sheet/interfaces/time-configuration.interface';

export interface TimeSheetDatabaseInterface {
  getDayTimeSlots(day: number): Promise<TimeSlotInterface[]>;
  getTimeSheetConfiguration(): Promise<TimeConfigurationInterface>;

  createConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface>;
  updateConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface>;
  deleteConfig(config: TimeConfigurationInterface): Promise<boolean | any>;

  createSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface>;
  updateSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface>;
  deleteSlot(slot: TimeSlotInterface): Promise<boolean | any>;
}
