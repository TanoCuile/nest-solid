import { Module } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../modules/time-sheet-management/interfaces/time-sheet.database.interface';
import { TimeSlotInterface } from '../../modules/time-sheet/interfaces/time-slot.interface';
import { TimeConfigurationInterface } from '../../modules/time-sheet/interfaces/time-configuration.interface';
import { TimeSheetModule } from '../../modules/time-sheet/time-sheet.module';
import { InstanceInterface } from '../../interfaces/instance.interface';
import { DataBaseServiceInterface } from '../../modules/data-base/interfaces/data-base-service.interface';
import { CreteriaType } from '../../modules/data-base/types/creteria.type';
import { UserStaffInterface } from '../../modules/user/services/interface/user-staff.interface';
import { TimeConfigurationServiceInterface } from '../../modules/time-sheet-management/interfaces/time-configuration-service.interface';
import { TimeSlotServiceInterface } from '../../modules/time-sheet-management/interfaces/time-slot-service.interface';
import { UserServiceInterface } from '../../modules/user/services/interface/user-service.interface';

export class TextDataBaseService<T extends InstanceInterface> implements DataBaseServiceInterface<T> {
  constructor(protected name: string) {}
  getName(): string {
    return this.name;
  }
  create(object: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  update(object: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(object: T): Promise<any> {
    throw new Error('Method not implemented.');
  }
  find(creteria: CreteriaType<T>): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}

export class MockService implements TimeSlotServiceInterface, TimeConfigurationServiceInterface, UserServiceInterface {
  getAllTimeSlotsPerDayCreteria(day: number): CreteriaType<TimeSlotInterface> {
    throw new Error('Method not implemented.');
  }
  getUserCreteria(userId: number): CreteriaType<UserStaffInterface> {
    throw new Error('Method not implemented.');
  }
  create(config: any) {
    throw new Error('Method not implemented.');
  }
  update(config: any) {
    throw new Error('Method not implemented.');
  }
  delete(config: any) {
    throw new Error('Method not implemented.');
  }
}

@Module({
  imports: [TimeSheetModule],
  providers: [
    {
      provide: 'TimeSlotDatabase',
      useFactory: () => new TextDataBaseService<TimeSlotInterface & UserStaffInterface>('slot_test'),
      // inject: [] // You can inject anything you want
    },
    {
      provide: 'TimeConfigurationDatabase',
      useFactory: () => new TextDataBaseService<TimeConfigurationInterface & UserStaffInterface>('slot_test'),
      // inject: [] // You can inject anything you want
    },
    { provide: 'TimeSlotServiceInterface', useClass: MockService },
    { provide: 'TimeConfigurationServiceInterface', useClass: MockService },
    { useClass: MockService, provide: 'UserServiceInterface' },
  ],
  exports: [
    'TimeSlotDatabase',
    'TimeConfigurationDatabase',
    'TimeSlotServiceInterface',
    'TimeConfigurationServiceInterface',
    'UserServiceInterface',
  ],
})
export class MockDataBaseModule {}
