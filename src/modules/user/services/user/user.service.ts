import { Injectable } from '@nestjs/common';
import { UserStaffInterface } from '../interface/user-staff.interface';
import { CreteriaType } from '../../../data-base/types/creteria.type';

@Injectable()
export class UserService {
  getUserCreteria(userId: number): CreteriaType<UserStaffInterface> {
    return {
      userId,
    } as CreteriaType<UserStaffInterface>;
  }
}
