import { InstanceInterface } from '../../../interfaces/instance.interface';

export type CreteriaType<T extends InstanceInterface> = { [key in keyof T]?: string | number };
