import { Module } from '@nestjs/common';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';
import { DataBaseModule } from './modules/data-base/data-base.module';

@Module({
  imports: [TimeSheetManagementModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
