import { Injectable } from '@nestjs/common';
const db = require('../../models');

import { sousCategorie } from '../../models/categorie.js';

@Injectable()
export class sousCategoriesService {
 
  async createsousCategorie(data: any) {
    try {
      const sousCategorie = await db.sousCategorie.create(data);
      return sousCategorie;
    } catch (error) {
      throw new Error(`failed to create souscatigories ${error.message}`);
    }
  }

  async getAllsousCategorie(): Promise<sousCategorie[]> {
    try {
      const sousCategorie = await db.sousCategorie.findAll();
      return sousCategorie;
    } catch (error) {
      throw new Error(`failed to get catigories ${error.message}`);
    }
  }

  async getsousCategorieById(id: number): Promise<sousCategorie | null> {
    try {
      const sousCategories = await db.sousCategorie.findByPk(id);
      return sousCategories;
    } catch (error) {
      throw new Error(`failed to get the Categorie ${error.message}`);
    }
  }

  async updatesousCategorieById(id: number, data: any): Promise<string> {
    try {
      const sousCategorie = await this.getsousCategorieById(id);
      if (sousCategorie !== null) {
        await db.sousCategorie.update(data, { where: { id: id } });
        return `sousCategorie with ID ${id} updated successfully : ${JSON.stringify(data)}`;
      } else {
        return `sousCategorie with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to update the sousCategorie ${error.message}`);
    }
  }

  async deletesousCategorieById(id: number): Promise<string> {
    try {
      const souscategories = await this.getsousCategorieById(id);
      if (sousCategorie !== null) {
        await db.sousCategorie.destroy({ where: { id: id } });
        return `sousCategorie with ID ${id} deleted successfully.`;
      } else {
        return `sousCategorie with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`failed to delete the sousCategorie ${error.message}`);
    }
  }
}