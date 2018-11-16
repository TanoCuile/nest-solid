import { Injectable, Inject } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../interfaces/time-sheet.database.interface';
import { TimeSlotInterface } from '../../interfaces/time-slot.interface';

@Injectable()
export class FreeTimeService {
  constructor(@Inject('TimeSheetDatabaseInterface') protected database: TimeSheetDatabaseInterface) {}

  async getFreeTime(day: number, countPrecisedCells: number) {
    const slots = await this.database.getDayTimeSlots(day);
    const config = await this.database.getTimeSheetConfiguration();

    let currentDurationOfEmptyTime = 0;
    let fromTime: number = 0;
    const freeSlots: TimeSlotInterface[] = [];

    for (let toTime = 0; toTime <= 24 * 60; toTime += config.precistion) {
      const isEmpty =
        slots.filter(
          slot => (fromTime <= slot.from && slot.from >= toTime) || (fromTime <= slot.to && slot.to >= toTime),
        ).length === 0;

      if (currentDurationOfEmptyTime >= countPrecisedCells || !isEmpty) {
        if (currentDurationOfEmptyTime >= countPrecisedCells) {
          freeSlots.push({
            day,
            from: fromTime,
            to: toTime,
            id: 0,
          } as TimeSlotInterface);
        }

        currentDurationOfEmptyTime = 0;
        fromTime = toTime;
      }

      if (isEmpty) {
        currentDurationOfEmptyTime += 1;
      }
    }

    return { freeSlots, config };
  }

  async getAllTimeSlots(day: number): Promise<TimeSlotInterface[]> {
    return this.database.getDayTimeSlots(day);
  }

  async createNewTimeSlot(slot: TimeSlotInterface) {
    return this.database.createSlot(slot);
  }

  async updateNewTimeSlot(slot: TimeSlotInterface) {
    return this.database.updateSlot(slot);
  }
}
