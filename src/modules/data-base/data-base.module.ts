import { Module } from '@nestjs/common';
import { TextTimesheetDatabaseService } from './services/text-timesheet-database/text-timesheet-database.service';

@Module({
  imports: [],
  providers: [{ provide: 'TimeSheetDatabaseInterface', useClass: TextTimesheetDatabaseService }],
  exports: ['TimeSheetDatabaseInterface'],
})
export class DataBaseModule {}
