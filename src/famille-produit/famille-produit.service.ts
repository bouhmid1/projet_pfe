import { Injectable } from '@nestjs/common';
const db = require('../../models');
import { familleProduit } from '../../models/produit.js';
@Injectable()
export class familleProduitService {
    async createfamilleProduit(data: any) {
        try {
          const familleproduits = await db.familleProduit.create(data);
          return familleproduits;
        } catch (error) {
          throw new Error(`failed to create familleproduit ${error.message}`);
        }
      }
    
      async getAllfamilleProduit(): Promise<familleProduit[]> {
        try {
          const familleProduits = await db.familleProduit.findAll();
          return familleProduits;
        } catch (error) {
          throw new Error(`failed to get familleProduit ${error.message}`);
        }
      }
    
      async getfamilleProduitById(id: number): Promise<familleProduit | null> {
        try {
          const familleproduit = await db.familleProduit.findByPk(id);
          return familleproduit;
        } catch (error) {
          throw new Error(`failed to get the familleproduit ${error.message}`);
        }
      }
    
      async updatefamilleProduitById(id: number, data: any): Promise<string> {
        try {
          const familleproduit = await this.getfamilleProduitById(id);
          if (familleproduit !== null) {
            await db.familleProduit.update(data, { where: { id: id } });
            return `familleproduit with ID ${id} updated successfully : ${JSON.stringify(data)}`;
          } else {
            return `familleProduit with ID ${id} not found.`;
          }
        } catch (error) {
          throw new Error(`failed to update the produit ${error.message}`);
        }
      }
    
      async deletefamilleProduitById(id: number): Promise<string> {
        try {
          const familleproduits = await this.getfamilleProduitById(id);
          if (familleproduits !== null) {
            await db.familleProduit.destroy({ where: { id: id } });
            return `familleProduit with ID ${id} deleted successfully.`;
          } else {
            return `familleProduit with ID ${id} not found.`;
          }
        } catch (error) {
          throw new Error(`failed to delete the familleproduit ${error.message}`);
        }
      }



}
