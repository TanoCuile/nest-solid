import { UserStaffInterface } from '../../user/services/interface/user-staff.interface';
import { TimeConfigurationInterface } from '../../time-sheet/interfaces/time-configuration.interface';

export class TimeConfiguration implements TimeConfigurationInterface, UserStaffInterface {
  protected _id: number = 0;
  protected _precision: number = 15;
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

  get precistion() {
    return this._precision;
  }

  set precision(precision: number) {
    this._precision = precision;
  }
}
