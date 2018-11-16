import { Module } from '@nestjs/common';
import { TimeSheetController } from './controllers/time-sheet/time-sheet.controller';
import { TimeSlotController } from './controllers/time-slot/time-slot.controller';
import { DataBaseModule } from '../data-base/data-base.module';
import { UserModule } from '../user/user.module';
import { TimeSheetManagementModule } from '../time-sheet-management/time-sheet-management.module';
import { ApiTimeSheetService } from './services/api-time-sheet/api-time-sheet.service';

@Module({
  imports: [DataBaseModule, UserModule, TimeSheetManagementModule],
  controllers: [TimeSheetController, TimeSlotController],
  providers: [ApiTimeSheetService],
})
export class ApiModule {}
