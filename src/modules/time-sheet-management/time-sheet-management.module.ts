import { Module } from '@nestjs/common';
import { FreeTimeService } from './services/free-time/free-time.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { TimeSheetController } from './controllers/time-sheet/time-sheet.controller';
import { TimeSlotController } from './controllers/time-slot/time-slot.controller';

@Module({
  imports: [DataBaseModule],
  providers: [FreeTimeService],
  controllers: [TimeSheetController, TimeSlotController],
})
export class TimeSheetManagementModule {}
