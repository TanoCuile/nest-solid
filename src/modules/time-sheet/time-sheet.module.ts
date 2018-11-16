import { Module } from '@nestjs/common';
import { FreeTimeService } from './services/free-time/free-time.service';

@Module({
  providers: [{ provide: 'FreeTimeServiceInterface', useClass: FreeTimeService }],
  exports: ['FreeTimeServiceInterface'],
})
export class TimeSheetModule {}
