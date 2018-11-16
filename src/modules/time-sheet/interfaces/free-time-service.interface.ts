import { TimeSlotInterface } from './time-slot.interface';
import { TimeConfigurationInterface } from './time-configuration.interface';

export interface FreeTimeServiceInterface {
  getFreeTime(
    slots: TimeSlotInterface[],
    config: TimeConfigurationInterface,
    countPrecisedCells: number,
  ): Promise<TimeSlotInterface[]>;
}
