import { TimeSlotInterface } from '../../time-sheet/interfaces/time-slot.interface';
import { CreteriaType } from '../../data-base/types/creteria.type';

export interface TimeSlotServiceInterface {
  getAllTimeSlotsPerDayCreteria(day: number): CreteriaType<TimeSlotInterface>;

  createNewTimeSlot(slot: TimeSlotInterface);

  updateNewTimeSlot(slot: TimeSlotInterface);

  deleteTimeSlot(slot: TimeSlotInterface);
}
