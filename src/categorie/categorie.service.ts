import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { Categorie } from '../../models/categorie.js';

@Injectable()
export class CategoriesService {
 
  
  async createCategorie(data: any) {
    try {
      const categorie = await db.Categorie.create(data);
      return categorie;
    } catch (error) {
      throw new Error(`failed to create catigories ${error.message}`);
    }
  }

  async getAllCategorie(): Promise<Categorie[]> {
    try {
      const categories = await db.Categorie.findAll();
      return categories;
    } catch (error) {
      throw new Error(`failed to get catigories ${error.message}`);
    }
  }

  async getCategorieById(id: number): Promise<Categorie | null> {
    try {
      const categorie = await db.Categorie.findByPk(id);
      return categorie;
    } catch (error) {
      throw new Error(`failed to get the Categorie ${error.message}`);
    }
  }

  async updateCategorieById(id: number, data: any): Promise<string> {
    try {
      const Categorie = await this.getCategorieById(id);
      if (Categorie !== null) {
        await db.Categorie.update(data, { where: { id: id } });
        return `Categorie with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `Categorie with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the Categorie ${error.message}`);
    }
  }

  async deleteCategorieById(id: number): Promise<string> {
    try {
      const categorie = await this.getCategorieById(id);
      if (categorie !== null) {
        await db.Categorie.destroy({ where: { id: id } });
        return `Categorie with ID ${id} deleted successfully.`;
      } else {
        return `Categorie with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the Categorie ${error.message}`);
    }
  }
}