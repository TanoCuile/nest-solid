import { Controller, Get, Inject, Query, Post, Body } from '@nestjs/common';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { ApiTimeSheetService } from '../../services/api-time-sheet/api-time-sheet.service';

@Controller('time-slot')
export class TimeSlotController {
  constructor(@Inject(ApiTimeSheetService) protected freeTimeService: ApiTimeSheetService) {}

  @Get('free')
  async getFreeSlotsAction(@Query('day') day: number) {
    return {
      data: await this.freeTimeService.getUserFreeTimeForDay({
        day: 1,
        requiredSlotSize: 4,
        userId: 1,
      }),
    };
  }

  @Post('')
  async createNewSlotAction(@Body() slot: TimeSlotInterface) {
    return {
      data: await this.freeTimeService.createSlot(slot),
    };
  }
}
