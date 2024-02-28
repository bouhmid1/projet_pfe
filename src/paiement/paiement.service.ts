import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Paiement } from '../../models/paiement.js';

@Injectable()
export class PaiementService {
  
  
  async createPaiement(data: any) {
    try {
      const Paiement = await db.Paiement.create(data);
      return Paiement;
    } catch (error) {
      throw new Error(`failed to create Paiement ${error.message}`);
    }
  }

  async getAllPaiement(): Promise<Paiement[]> {
    try {
      const Paiement = await db.Paiement.findAll();
      return Paiement;
    } catch (error) {
      throw new Error(`failed to get Paiement ${error.message}`);
    }
  }

  async getPaiementById(id: number): Promise<Paiement | null> {
    try {
      const Paiement = await db.Paiement.findByPk(id);
      return Paiement;
    } catch (error) {
      throw new Error(`failed to get the Paiement ${error.message}`);
    }
  }

  async updatePaiementById(id: number, data: any): Promise<string> {
    try {
      const Paiement = await this.getPaiementById(id);
      if (Paiement !== null) {
        await db.Paiement.update(data, { where: { id: id } });
        return `Paiement with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Paiement with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Paiement ${error.message}`);
    }
  }

  async deletePaiementById(id: number): Promise<string> {
    try {
      const panier = await this.getPaiementById(id);
      if (panier !== null) {
        await db.Panier.destroy({ where: { id: id } });
        return `Paiement with ID ${id} deleted successfully.`;
      } else {
        return `Paiement with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Paiement ${error.message}`);
    }
  }
}
