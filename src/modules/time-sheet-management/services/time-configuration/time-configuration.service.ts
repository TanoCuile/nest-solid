import { Injectable, Inject } from '@nestjs/common';
import { TextDataBaseService } from '../../../../test/mock/mock-data-base.module';
import { TimeConfigurationInterface } from '../../../time-sheet/interfaces/time-configuration.interface';
import { CreteriaType } from '../../../data-base/types/creteria.type';
import { TimeConfigurationServiceInterface } from '../../interfaces/time-configuration-service.interface';

@Injectable()
export class TimeConfigurationService implements TimeConfigurationServiceInterface {
  constructor(
    @Inject('TimeConfigurationDatabase') protected database: TextDataBaseService<TimeConfigurationInterface>,
  ) {}

  async createNewTimeSlot(config: TimeConfigurationInterface) {
    return this.database.create(config);
  }

  async updateNewTimeconfig(config: TimeConfigurationInterface) {
    return this.database.update(config);
  }

  async deleteTimeconfig(config: TimeConfigurationInterface) {
    return this.database.delete(config);
  }
}
