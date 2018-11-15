import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';

@Module({
  imports: [TimeSheetManagementModule, DataBaseModule, TimeSheetModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
