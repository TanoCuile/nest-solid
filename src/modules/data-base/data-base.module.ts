import { Module } from '@nestjs/common';
import { TimeSheetDatabaseService } from './services/time-sheet.database/time-sheet.database.service';
import { TimeSheetModule } from '../time-sheet/time-sheet.module';

@Module({
  imports: [TimeSheetModule],
  providers: [{ provide: 'TimeSheetDatabaseInterface', useClass: TimeSheetDatabaseService }],
  exports: ['TimeSheetDatabaseInterface'],
})
export class DataBaseModule {}
