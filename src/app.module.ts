import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { ProduitsModule } from './produit/produit.module';
import { CategorieModule } from './categorie/categorie.module';
import { SousCategoriesModule } from './sous-categorie/sous-categorie.module';
import { familleProduitModule } from './famille-produit/famille-produit.module';
import { PanierModule } from './panier/panier.module';
import { CommandeModule } from './commande/commande.module';
import { FactureModule } from './facture/facture.module';
import { PaiementModule } from './paiement/paiement.module';
import { LivraisonModule } from './livraison/livraison.module';
import { DepotsModule } from './depots/depots.module';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [UsersModule, ProduitsModule, CategorieModule, SousCategoriesModule, familleProduitModule, PanierModule, CommandeModule, FactureModule, PaiementModule, LivraisonModule, DepotsModule, ServiceModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
