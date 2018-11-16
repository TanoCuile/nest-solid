import { InstanceInterface } from '../../../interfaces/instance.interface';
export interface TimeSlotInterface extends InstanceInterface {
  day?: number;
  from: number;
  to: number;
}
