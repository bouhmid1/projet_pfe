import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { ProduitsService } from './produit.service';
import {Produit} from '../../models/produit';

@Controller('produits')
export class ProduitsController {

constructor(private readonly produitsService:ProduitsService){}
@Post()
create (@Body() createProduitDto:Produit):Produit{
    return this.produitsService.createProduit(createProduitDto);
}
@Get()
findAll(): Promise<Produit[]>{
   return this.produitsService.getAllProduits();
}
@Get(':id')
findOne(@Param('id') id:number):Produit{
    return this.produitsService.getProduitById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Produit{
    return this.produitsService.deleteProduitById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateProduitDto:Partial<Produit>):Produit{
    return this.produitsService.updateProduitById(id,updateProduitDto)
}



}
