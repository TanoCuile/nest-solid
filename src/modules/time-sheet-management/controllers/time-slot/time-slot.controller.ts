import { Controller, Get, Inject, Query, Post, Body } from '@nestjs/common';
import { FreeTimeService } from '../../services/free-time/free-time.service';
import { TimeSlotInterface } from '../../interfaces/time-slot.interface';

@Controller('time-slot')
export class TimeSlotController {
  constructor(@Inject(FreeTimeService) protected freeTimeService: FreeTimeService) {}

  @Get('free')
  async getFreeSlotsAction(@Query('day') day: number) {
    return {
      data: await this.freeTimeService.getFreeTime(day, 4),
    };
  }

  @Post('')
  async createNewSlotAction(@Body() slot: TimeSlotInterface) {
    return {
      data: await this.freeTimeService.createNewTimeSlot(slot),
    };
  }
}
