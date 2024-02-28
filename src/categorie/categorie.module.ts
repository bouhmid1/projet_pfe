import { Module } from '@nestjs/common';
import { CategoriesService } from './categorie.service';
import { CategoriesController } from './categorie.controller';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategorieModule {}
