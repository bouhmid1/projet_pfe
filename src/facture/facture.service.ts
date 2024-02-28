import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Facture } from '../../models/facture.js';

@Injectable()
export class FactureService {
  
  
  async createFacture(data: any) {
    try {
      const Facture = await db.Facture.create(data);
      return Facture;
    } catch (error) {
      throw new Error(`failed to create Facture ${error.message}`);
    }
  }

  async getAllFacture(): Promise<Facture[]> {
    try {
      const Facture = await db.Facture.findAll();
      return Facture;
    } catch (error) {
      throw new Error(`failed to get Facture ${error.message}`);
    }
  }

  async getFactureById(id: number): Promise<Facture | null> {
    try {
      const facture = await db.Produit.findByPk(id);
      return facture;
    } catch (error) {
      throw new Error(`failed to get the Facture ${error.message}`);
    }
  }

  async updateFactureById(id: number, data: any): Promise<string> {
    try {
      const Facture = await this.getFactureById(id);
      if (Facture !== null) {
        await db.Facture.update(data, { where: { id: id } });
        return `Facture with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Facture with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Facture ${error.message}`);
    }
  }

  async deleteFactureById(id: number): Promise<string> {
    try {
      const Facture = await this.getFactureById(id);
      if (Facture !== null) {
        await db.Facture.destroy({ where: { id: id } });
        return `Facture with ID ${id} deleted successfully.`;
      } else {
        return `Facture with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Facture ${error.message}`);
    }
  }
}
