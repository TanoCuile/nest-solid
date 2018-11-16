import { Module } from '@nestjs/common';
import { TextTimesheetDatabaseService } from './services/text-timesheet-database/text-timesheet-database.service';
import { TextDataBaseService } from './services/text-data-base/text-data-base.service';
import { TimeSlotInterface } from '../time-sheet/interfaces/time-slot.interface';
import { TimeSlot } from './classes/time-slot';
import { TimeConfiguration } from './classes/time-configuration';

@Module({
  imports: [],
  providers: [
    {
      provide: 'TimeSlotDatabase',
      useFactory: () => new TextDataBaseService<TimeSlot>('slot', TimeSlot),
      // inject: [] // You can inject anything you want
    },
    {
      provide: 'TimeConfigurationDatabase',
      useFactory: () => new TextDataBaseService<TimeConfiguration>('config', TimeConfiguration),
      // inject: [] // You can inject anything you want
    },
  ],
  exports: ['TimeSlotDatabase', 'TimeConfigurationDatabase'],
})
export class DataBaseModule {}
