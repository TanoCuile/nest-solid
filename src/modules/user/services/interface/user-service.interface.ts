import { CreteriaType } from '../../../data-base/types/creteria.type';
import { UserStaffInterface } from './user-staff.interface';

export interface UserServiceInterface {
  getUserCreteria(userId: number): CreteriaType<UserStaffInterface>;
}
