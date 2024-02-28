import { Module } from '@nestjs/common';
import { PanierService } from './panier.service';
import { PanierController } from './panier.controller';

@Module({
  providers: [PanierService],
  controllers: [PanierController]
})
export class PanierModule {}
