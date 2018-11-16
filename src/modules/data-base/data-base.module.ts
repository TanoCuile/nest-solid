import { Module } from '@nestjs/common';
import { TimeSheetModule } from '../time-sheet/time-sheet.module';
import { TextTimesheetDatabaseService } from './services/text-timesheet-database/text-timesheet-database.service';

@Module({
  imports: [TimeSheetModule],
  providers: [{ provide: 'TimeSheetDatabaseInterface', useClass: TextTimesheetDatabaseService }],
  exports: ['TimeSheetDatabaseInterface'],
})
export class DataBaseModule {}
