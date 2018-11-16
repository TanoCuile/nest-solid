import { TimeConfigurationInterface } from '../../time-sheet-management/interfaces/time-configuration.interface';

export class TimeConfiguration implements TimeConfigurationInterface {
  protected _id: number = 0;
  protected _precision: number = 15;

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
