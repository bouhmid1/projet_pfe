import { Module } from '@nestjs/common';
import { ProduitsService } from './produit.service';
import { ProduitsController } from './produit.controller';

@Module({
  providers: [ProduitsService],
  controllers: [ProduitsController]
})
export class ProduitsModule {}
