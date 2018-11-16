import { Module } from '@nestjs/common';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';

@Module({
  imports: [TimeSheetManagementModule, DataBaseModule, TimeSheetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
