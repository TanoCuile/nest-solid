import { Module } from '@nestjs/common';
import { DataBaseModule } from '../data-base/data-base.module';
import { TimeSheetModule } from '../time-sheet/time-sheet.module';
import { TimeSlotService } from './services/time-slot/time-slot.service';
import { TimeConfigurationService } from './services/time-configuration/time-configuration.service';

@Module({
  imports: [DataBaseModule, TimeSheetModule],
  providers: [
    { provide: 'TimeSlotServiceInterface', useClass: TimeSlotService },
    { provide: 'TimeConfigurationServiceInterface', useClass: TimeConfigurationService },
  ],
  exports: ['TimeSlotServiceInterface', 'TimeConfigurationServiceInterface'],
})
export class TimeSheetManagementModule {}
