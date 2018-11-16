import { DataBaseServiceInterface } from '../../interfaces/data-base-service.interface';
import { CreteriaType } from '../../types/creteria.type';
import { InstanceInterface } from '../../../../interfaces/instance.interface';
import fs from 'fs';
import path from 'path';

export class TextDataBaseService<T extends InstanceInterface> implements DataBaseServiceInterface<T> {
  protected basePath = path.join(process.cwd(), 'resources', 'time-sheet');
  protected entities: T[];
  constructor(protected name: string, protected type: new () => T) {
    this.entities = this.loadEntities();
  }

  getName(): string {
    return this.name;
  }

  async create(object: T): Promise<T> {
    object.id = this.getIndex();
    this.entities.push(object);
    this.storeEntities();
    return object;
  }
  async update(object: T): Promise<T> {
    const entity = Object.assign(this.entities.find(item => item.id === object.id) || [{}][0], object);
    this.storeEntities();
    return entity;
  }
  async delete(object: T): Promise<any> {
    this.entities = this.entities.filter(item => item.id !== object.id);
    this.storeEntities();
    return true;
  }
  async find(creteria: CreteriaType<T>): Promise<T[]> {
    return this.entities.filter(
      item => Object.keys(creteria).filter(key => this.fixType(item, key) !== this.fixType(creteria, key)).length === 0,
    );
  }

  private loadEntities(): T[] {
    return (JSON.parse(fs.readFileSync(this.getPath()).toString()) as any[]).map(e =>
      Object.assign(new this.type(), e),
    );
  }

  private storeEntities() {
    fs.writeFileSync(this.getPath(), JSON.stringify(this.entities));
  }

  private getPath(): string {
    return path.join(this.basePath, `${this.name}.json`);
  }

  private fixType(obj: object, key: string): any {
    return isNaN(Number(obj[key])) ? obj[key] : Number(obj[key]);
  }

  private getIndex() {
    return this.entities.reduce((total, item) => (total < (item.id || 1) ? item.id || 1 : total), 0) + 1;
  }
}
