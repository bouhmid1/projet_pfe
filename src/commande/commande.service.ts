import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Commande } from '../../models/commande.js';

@Injectable()
export class CommandeService {
  
  
  async createPanier(data: any) {
    try {
      const Commande = await db.Commande.create(data);
      return Commande;
    } catch (error) {
      throw new Error(`failed to create Commande ${error.message}`);
    }
  }

  async getAllCommande(): Promise<Commande[]> {
    try {
      const Commande = await db.Commande.findAll();
      return Commande;
    } catch (error) {
      throw new Error(`failed to get Commande ${error.message}`);
    }
  }

  async getCommandeById(id: number): Promise<Commande | null> {
    try {
      const Commande = await db.Produit.findByPk(id);
      return Commande;
    } catch (error) {
      throw new Error(`failed to get the Commande ${error.message}`);
    }
  }

  async updateCommandeById(id: number, data: any): Promise<string> {
    try {
      const Commande = await this.getCommandeById(id);
      if (Commande !== null) {
        await db.Commande.update(data, { where: { id: id } });
        return `Commande with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Commande with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Commande ${error.message}`);
    }
  }

  async deleteCommandeById(id: number): Promise<string> {
    try {
      const Commande = await this.getCommandeById(id);
      if (Commande !== null) {
        await db.Commande.destroy({ where: { id: id } });
        return `Commande with ID ${id} deleted successfully.`;
      } else {
        return `Commande with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Commande ${error.message}`);
    }
  }
}

