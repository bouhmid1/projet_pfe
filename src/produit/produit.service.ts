import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Produit } from '../../models/produit.js';

@Injectable()
export class ProduitsService {
  
  
  async createProduit(data: any) {
    try {
      const produit = await db.Produit.create(data);
      return produit;
    } catch (error) {
      throw new Error(`failed to create produit ${error.message}`);
    }
  }

  async getAllProduits(): Promise<Produit[]> {
    try {
      const produits = await db.Produit.findAll();
      return produits;
    } catch (error) {
      throw new Error(`failed to get Produit ${error.message}`);
    }
  }

  async getProduitById(id: number): Promise<Produit | null> {
    try {
      const produit = await db.Produit.findByPk(id);
      return produit;
    } catch (error) {
      throw new Error(`failed to get the produit ${error.message}`);
    }
  }

  async updateProduitById(id: number, data: any): Promise<string> {
    try {
      const produit = await this.getProduitById(id);
      if (produit !== null) {
        await db.Produit.update(data, { where: { id: id } });
        return `produit with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Produit with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the produit ${error.message}`);
    }
  }

  async deleteProduitById(id: number): Promise<string> {
    try {
      const produit = await this.getProduitById(id);
      if (produit !== null) {
        await db.Produit.destroy({ where: { id: id } });
        return `Produit with ID ${id} deleted successfully.`;
      } else {
        return `Produit with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the produit ${error.message}`);
    }
  }
}
