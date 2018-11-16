import { TimeConfigurationInterface } from '../../time-sheet/interfaces/time-configuration.interface';
export interface TimeConfigurationServiceInterface {
  createNewTimeSlot(config: TimeConfigurationInterface);

  updateNewTimeconfig(config: TimeConfigurationInterface);

  deleteTimeconfig(config: TimeConfigurationInterface);
}
