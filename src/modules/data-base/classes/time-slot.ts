import moment from 'moment';
import { TimeSlotInterface } from '../../time-sheet/interfaces/time-slot.interface';
import { UserStaffInterface } from '../../user/services/interface/user-staff.interface';

export class TimeSlot implements TimeSlotInterface, UserStaffInterface {
  protected _id: number = 0;
  protected _day: number = 0;
  protected _from: number = 8 * 60 + 0;
  protected _to: number = 12 * 60 + 15;
  protected _userId!: number;

  get userId() {
    return this._userId;
  }

  set userId(userId: number) {
    this._userId = userId;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get from(): number {
    return this._from;
  }

  set from(time: number) {
    this._from = time;
  }

  get to(): number {
    return this._to;
  }

  set to(time: number) {
    this._to = time;
  }

  get day() {
    return this._day;
  }

  set day(day) {
    this._day = day;
  }
}
