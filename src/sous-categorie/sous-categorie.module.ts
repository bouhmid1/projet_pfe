import { Module } from '@nestjs/common';
import { sousCategoriesService } from './sous-categorie.service';
import { SousCategoriesController } from './sous-categorie.controller';

@Module({
  providers: [sousCategoriesService],
  controllers: [SousCategoriesController]
})
export class SousCategoriesModule {}
