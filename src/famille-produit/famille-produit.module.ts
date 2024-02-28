import { Module } from '@nestjs/common';
import { familleProduitService } from './famille-produit.service';
import { familleProduitController } from './famille-produit.controller';

@Module({
  providers: [familleProduitService],
  controllers: [familleProduitController]
})
export class familleProduitModule {}
