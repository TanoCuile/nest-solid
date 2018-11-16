import { Module } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../modules/time-sheet-management/interfaces/time-sheet.database.interface';
import { TimeSlotInterface } from '../../modules/time-sheet/interfaces/time-slot.interface';
import { TimeConfigurationInterface } from '../../modules/time-sheet/interfaces/time-configuration.interface';
import { TimeSheetModule } from '../../modules/time-sheet/time-sheet.module';
import { InstanceInterface } from '../../interfaces/instance.interface';
import { DataBaseServiceInterface } from '../../modules/data-base/interfaces/data-base-service.interface';
import { CreteriaType } from '../../modules/data-base/types/creteria.type';
import { UserStaffInterface } from '../../modules/user/services/interface/user-staff.interface';

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

@Module({
  imports: [TimeSheetModule],
  providers: [
    {
      provide: 'TimeSheetDatabaseInterface',
      useClass: class implements TimeSheetDatabaseInterface {
        getDayTimeSlots(): Promise<TimeSlotInterface[]> {
          throw new Error('Method not implemented.');
        }
        getTimeSheetConfiguration(): Promise<TimeConfigurationInterface> {
          throw new Error('Method not implemented.');
        }
        createConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface> {
          throw new Error('Method not implemented.');
        }
        updateConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface> {
          throw new Error('Method not implemented.');
        }
        deleteConfig(config: TimeConfigurationInterface): Promise<any> {
          throw new Error('Method not implemented.');
        }
        createSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface> {
          throw new Error('Method not implemented.');
        }
        updateSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface> {
          throw new Error('Method not implemented.');
        }
        deleteSlot(slot: TimeSlotInterface): Promise<any> {
          throw new Error('Method not implemented.');
        }
      },
    },
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
  ],
  exports: ['TimeSlotDatabase', 'TimeConfigurationDatabase'],
})
export class MockDataBaseModule {}
