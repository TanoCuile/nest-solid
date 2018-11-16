import { Injectable } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../../time-sheet-management/interfaces/time-sheet.database.interface';
import { TimeSlot } from '../../classes/time-slot';
import { TimeConfiguration } from '../../classes/time-configuration';
import { TimeSlotInterface } from '../../../time-sheet-management/interfaces/time-slot.interface';
import { TimeConfigurationInterface } from '../../../time-sheet-management/interfaces/time-configuration.interface';

@Injectable()
export class TimeSheetDatabaseService implements TimeSheetDatabaseInterface {
  createConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface> {
    throw new Error('Method not implemented.');
  }
  updateConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface> {
    throw new Error('Method not implemented.');
  }
  deleteConfig(config: TimeConfigurationInterface): Promise<any> {
    throw new Error('Method not implemented.');
  }
  createSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface> {
    throw new Error('Method not implemented.');
  }
  updateSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface> {
    throw new Error('Method not implemented.');
  }
  deleteSlot(slot: TimeSlotInterface): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getDayTimeSlots(): Promise<TimeSlotInterface[]> {
    return [];
  }

  async getTimeSheetConfiguration(): Promise<TimeConfigurationInterface> {
    return new TimeConfiguration();
  }
}
