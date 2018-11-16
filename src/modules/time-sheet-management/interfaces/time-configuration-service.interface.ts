import { TimeConfigurationInterface } from '../../time-sheet/interfaces/time-configuration.interface';
export interface TimeConfigurationServiceInterface {
  create(config: TimeConfigurationInterface);

  update(config: TimeConfigurationInterface);

  delete(config: TimeConfigurationInterface);
}
