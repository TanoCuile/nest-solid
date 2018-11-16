import { Injectable, Inject } from '@nestjs/common';
import { TimeConfigurationInterface } from '../../../time-sheet/interfaces/time-configuration.interface';
import { TimeConfigurationServiceInterface } from '../../interfaces/time-configuration-service.interface';

@Injectable()
export class TimeConfigurationService implements TimeConfigurationServiceInterface {
  constructor(@Inject('TimeConfigurationDatabase') protected database: TimeConfigurationServiceInterface) {}

  async create(config: TimeConfigurationInterface) {
    return this.database.create(config);
  }

  async update(config: TimeConfigurationInterface) {
    return this.database.update(config);
  }

  async delete(config: TimeConfigurationInterface) {
    return this.database.delete(config);
  }
}
