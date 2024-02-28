import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Panier } from '../../models/panier.js';

@Injectable()
export class PanierService {
  
  
  async createPanier(data: any) {
    try {
      const panier = await db.Panier.create(data);
      return panier;
    } catch (error) {
      throw new Error(`failed to create produit ${error.message}`);
    }
  }

  async getAllPanier(): Promise<Panier[]> {
    try {
      const panier = await db.Panier.findAll();
      return panier;
    } catch (error) {
      throw new Error(`failed to get Panier ${error.message}`);
    }
  }

  async getPanierById(id: number): Promise<Panier | null> {
    try {
      const panier = await db.Produit.findByPk(id);
      return panier;
    } catch (error) {
      throw new Error(`failed to get the panier ${error.message}`);
    }
  }

  async updatePanierById(id: number, data: any): Promise<string> {
    try {
      const panier = await this.getPanierById(id);
      if (panier !== null) {
        await db.Panier.update(data, { where: { id: id } });
        return `Panier with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Panier with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Panier ${error.message}`);
    }
  }

  async deletePanierById(id: number): Promise<string> {
    try {
      const panier = await this.getPanierById(id);
      if (panier !== null) {
        await db.Panier.destroy({ where: { id: id } });
        return `Panier with ID ${id} deleted successfully.`;
      } else {
        return `Panier with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Panier ${error.message}`);
    }
  }
}
