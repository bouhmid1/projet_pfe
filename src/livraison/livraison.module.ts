import { Module } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { LivraisonController } from './livraison.controller';

@Module({
  providers: [LivraisonService],
  controllers: [LivraisonController]
})
export class LivraisonModule {}
