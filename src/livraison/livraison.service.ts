import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Livraison } from '../../models/livraison.js';

@Injectable()
export class LivraisonService {
  
  
  async createLivraison(data: any) {
    try {
      const Livraison = await db.Livraison.create(data);
      return Livraison;
    } catch (error) {
      throw new Error(`failed to create Livraison ${error.message}`);
    }
  }

  async getAllLivraison(): Promise<Livraison[]> {
    try {
      const Livraison = await db.Livraison.findAll();
      return Livraison;
    } catch (error) {
      throw new Error(`failed to get Livraison ${error.message}`);
    }
  }

  async getLivraisonById(id: number): Promise<Livraison | null> {
    try {
      const Livraison = await db.Livraison.findByPk(id);
      return Livraison;
    } catch (error) {
      throw new Error(`failed to get the Livraison ${error.message}`);
    }
  }

  async updateLivraisonById(id: number, data: any): Promise<string> {
    try {
      const Livraison = await this.getLivraisonById(id);
      if (Livraison !== null) {
        await db.Livraison.update(data, { where: { id: id } });
        return `Livraison with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Livraison with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Livraison ${error.message}`);
    }
  }

  async deleteLivraisonById(id: number): Promise<string> {
    try {
      const Livraison = await this.getLivraisonById(id);
      if (Livraison !== null) {
        await db.Livraison.destroy({ where: { id: id } });
        return `Livraison with ID ${id} deleted successfully.`;
      } else {
        return `Livraison with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Livraison ${error.message}`);
    }
  }
}
