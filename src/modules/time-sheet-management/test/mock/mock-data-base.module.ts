import { Module } from '@nestjs/common';
import { TimeSheetModule } from '../../../time-sheet/time-sheet.module';
import { TimeSheetDatabaseInterface } from '../../interfaces/time-sheet.database.interface';
import { TimeSlotInterface } from '../../interfaces/time-slot.interface';
import { TimeConfigurationInterface } from '../../interfaces/time-configuration.interface';

@Module({
  imports: [TimeSheetModule],
  providers: [
    {
      provide: 'TimeSheetDatabaseInterface',
      useClass: class implements TimeSheetDatabaseInterface {
        getDayTimeSlots(): Promise<TimeSlotInterface[]> {
          throw new Error('Method not implemented.');
        }
        getTimeSheetConfiguration(): Promise<TimeConfigurationInterface> {
          throw new Error('Method not implemented.');
        }
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
      },
    },
  ],
  exports: ['TimeSheetDatabaseInterface'],
})
export class MockDataBaseModule {}
