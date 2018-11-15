import { Controller, Get, Inject } from '@nestjs/common';
import { FreeTimeService } from '../../services/free-time/free-time.service';

@Controller('time-slot')
export class TimeSlotController {
  constructor(@Inject(FreeTimeService) protected freeTimeService: FreeTimeService) {}

  @Get('free')
  getFreeSlotsAction() {
    return {
      data: this.freeTimeService.getFreeTime(),
    };
  }
}
