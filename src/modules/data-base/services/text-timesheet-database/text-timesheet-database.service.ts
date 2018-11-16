import { Injectable } from '@nestjs/common';
import { TimeSheetDatabaseInterface } from '../../../time-sheet-management/interfaces/time-sheet.database.interface';
import { TimeConfiguration } from '../../classes/time-configuration';
import path from 'path';
import fs from 'fs';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { TimeConfigurationInterface } from '../../../time-sheet/interfaces/time-configuration.interface';

@Injectable()
export class TextTimesheetDatabaseService implements TimeSheetDatabaseInterface {
  protected basePath: string;
  protected slotsPath: string;
  protected configPath: string;

  protected slots: TimeSlotInterface[] = [];
  protected configs: TimeConfigurationInterface[] = [];

  constructor() {
    this.basePath = path.join(process.cwd(), 'resources', 'time-sheet');
    this.slotsPath = path.join(this.basePath, 'slot.json');
    this.configPath = path.join(this.basePath, 'config.json');

    this.slots = JSON.parse(fs.readFileSync(this.slotsPath).toString() || '[]');
    this.configs = JSON.parse(fs.readFileSync(this.configPath).toString() || '[]');
  }

  async createConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface> {
    config.id = this.getNewConfigIndex();
    this.configs.push(config);
    this.storeConfigs();
    return config;
  }

  async updateConfig(config: TimeConfigurationInterface): Promise<TimeConfigurationInterface> {
    Object.assign(this.configs.find(item => item.id === config.id) || [{}][0], config);
    this.storeConfigs();
    return config;
  }
  async deleteConfig(config: TimeConfigurationInterface): Promise<any> {
    this.configs = this.configs.filter(item => item.id !== config.id);
    this.storeConfigs();
    return true;
  }

  async createSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface> {
    slot.id = this.getNewSlotIndex();
    this.slots.push(slot);
    this.storeSlots();
    return slot;
  }
  async updateSlot(slot: TimeSlotInterface): Promise<TimeSlotInterface> {
    Object.assign(this.configs.find(item => item.id === slot.id) || [{}][0], slot);
    this.storeSlots();
    return slot;
  }
  async deleteSlot(slot: TimeSlotInterface): Promise<any> {
    this.slots = this.slots.filter(item => item.id !== slot.id);
    this.storeSlots();
    return true;
  }
  async getDayTimeSlots(day: number): Promise<TimeSlotInterface[]> {
    return this.slots.filter(slot => slot.day === day);
  }

  async getTimeSheetConfiguration(): Promise<TimeConfigurationInterface> {
    return new TimeConfiguration();
  }

  async storeData() {
    this.storeSlots();
    this.storeConfigs();
  }

  private storeConfigs() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.configPath));
  }

  private storeSlots() {
    fs.writeFileSync(this.slotsPath, JSON.stringify(this.slots));
  }

  private getNewConfigIndex() {
    return this.configs.reduce((total, item) => (total < (item.id || 1) ? item.id || 1 : total), 0) + 1;
  }

  private getNewSlotIndex() {
    return this.configs.reduce((total, item) => (total < (item.id || 1) ? item.id || 1 : total), 0) + 1;
  }
}
