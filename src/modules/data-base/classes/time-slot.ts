import { TimeSlotInterface } from '../../time-sheet-management/interfaces/time-slot.interface';
import moment from 'moment';

export class TimeSlot implements TimeSlotInterface {
  protected _id: number = 0;
  protected _day: number = 0;
  protected _from: number = 8 * 60 + 0;
  protected _to: number = 12 * 60 + 15;

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
