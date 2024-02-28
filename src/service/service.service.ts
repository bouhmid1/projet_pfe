import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Service } from '../../models/service.js';

@Injectable()
export class ServiceService {
  
  
  async createService(data: any) {
    try {
      const Service = await db.Service.create(data);
      return Service;
    } catch (error) {
      throw new Error(`failed to create Service ${error.message}`);
    }
  }

  async getAllService(): Promise<Service[]> {
    try {
      const Service = await db.Service.findAll();
      return Service;
    } catch (error) {
      throw new Error(`failed to get Service ${error.message}`);
    }
  }

  async getServiceById(id: number): Promise<Service | null> {
    try {
      const Service = await db.Service.findByPk(id);
      return Service;
    } catch (error) {
      throw new Error(`failed to get the Service ${error.message}`);
    }
  }

  async updateServiceById(id: number, data: any): Promise<string> {
    try {
      const Service = await this.getServiceById(id);
      if (Service !== null) {
        await db.Service.update(data, { where: { id: id } });
        return `Service with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Service with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Service ${error.message}`);
    }
  }

  async deleteServiceById(id: number): Promise<string> {
    try {
      const Service = await this.getServiceById(id);
      if (Service !== null) {
        await db.Service.destroy({ where: { id: id } });
        return `Service with ID ${id} deleted successfully.`;
      } else {
        return `Service with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Service ${error.message}`);
    }
  }
}
