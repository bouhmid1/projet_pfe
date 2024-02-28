import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Depots } from '../../models/depots.js';

@Injectable()
export class DepotsService {
  
  
  async createDepots(data: any) {
    try {
      const Depots = await db.Depots.create(data);
      return Depots;
    } catch (error) {
      throw new Error(`failed to create Depots ${error.message}`);
    }
  }

  async getAllDepots(): Promise<Depots[]> {
    try {
      const Depots = await db.Depots.findAll();
      return Depots;
    } catch (error) {
      throw new Error(`failed to get Depots ${error.message}`);
    }
  }

  async getDepotsById(id: number): Promise<Depots | null> {
    try {
      const Depots = await db.Depots.findByPk(id);
      return Depots;
    } catch (error) {
      throw new Error(`failed to get the Depots ${error.message}`);
    }
  }

  async updateDepotsById(id: number, data: any): Promise<string> {
    try {
      const Depots = await this.getDepotsById(id);
      if (Depots !== null) {
        await db.Depots.update(data, { where: { id: id } });
        return `Depots with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Depots with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Depots ${error.message}`);
    }
  }

  async deleteDepotsById(id: number): Promise<string> {
    try {
      const Depots = await this.getDepotsById(id);
      if (Depots !== null) {
        await db.Depots.destroy({ where: { id: id } });
        return `Depots with ID ${id} deleted successfully.`;
      } else {
        return `Depots with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Depots ${error.message}`);
    }
  }
}
