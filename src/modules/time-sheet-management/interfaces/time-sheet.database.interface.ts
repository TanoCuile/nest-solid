import { TimeSlotInterface } from './time-slot.interface';
import { TimeConfigurationInterface } from './time-configuration.interface';

export interface TimeSheetDatabaseInterface {
  getDayTimeSlots(): Promise<TimeSlotInterface[]>;
  getTimeSheetConfiguration(): Promise<TimeConfigurationInterface>;

  createConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface>;
  updateConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface>;
  deleteConfig(config: TimeConfigurationInterface): Promise<boolean | any>;

  createSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface>;
  updateSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface>;
  deleteSlot(slot: TimeSlotInterface): Promise<boolean | any>;
}
