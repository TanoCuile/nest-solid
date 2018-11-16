import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotServiceInterface } from '../../../time-sheet-management/interfaces/time-slot-service.interface';
import { TimeConfigurationServiceInterface } from '../../../time-sheet-management/interfaces/time-configuration-service.interface';
import { FreeTimeServiceInterface } from '../../../time-sheet/interfaces/free-time-service.interface';
import { UserServiceInterface } from '../../../user/services/interface/user-service.interface';
import { DataBaseServiceInterface } from '../../../data-base/interfaces/data-base-service.interface';
import { TimeConfigurationInterface } from '../../../time-sheet/interfaces/time-configuration.interface';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';

@Injectable()
export class ApiTimeSheetService {
  constructor(
    @Inject('TimeConfigurationDatabase') protected configDatabase: DataBaseServiceInterface<TimeConfigurationInterface>,
    @Inject('TimeSlotDatabase') protected slotDatabase: DataBaseServiceInterface<TimeSlotInterface>,
    @Inject('TimeSlotServiceInterface') protected timeSlotService: TimeSlotServiceInterface,
    @Inject('TimeConfigurationServiceInterface') protected timeConfigurationService: TimeConfigurationServiceInterface,
    @Inject('FreeTimeServiceInterface') protected freeTimeConfigurationService: FreeTimeServiceInterface,
    @Inject('UserServiceInterface') protected userService: UserServiceInterface,
  ) {}

  async getUserFreeTimeForDay({
    userId,
    day,
    requiredSlotSize,
  }: {
    userId: number;
    day: number;
    requiredSlotSize: number;
  }): Promise<TimeSlotInterface[]> {
    const config = await this.configDatabase.find(this.userService.getUserCreteria(userId));
    const criteria = Object.assign(
      {},
      this.userService.getUserCreteria(userId),
      this.timeSlotService.getAllTimeSlotsPerDayCreteria(day),
    );
    console.log(criteria);
    const slots = await this.slotDatabase.find(criteria);

    console.log(slots, config);

    return this.freeTimeConfigurationService.getFreeTime(slots, config[0], requiredSlotSize);
  }

  async createSlot(slot: TimeSlotInterface) {
    return this.slotDatabase.create(slot);
  }
}
