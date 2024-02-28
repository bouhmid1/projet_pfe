import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { PanierService } from './panier.service';
import {Panier} from '../../models/panier';

@Controller('panier')
export class PanierController {

constructor(private readonly panierService:PanierService){}
@Post()
create (@Body() createPanierDto:Panier):Panier{
    return this.panierService.createPanier(createPanierDto);
}
@Get()
findAll(): Promise<Panier[]>{
   return this.panierService.getAllPanier();
}
@Get(':id')
findOne(@Param('id') id:number):Panier{
    return this.panierService.getPanierById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Panier{
    return this.panierService.deletePanierById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateProduitDto:Partial<Panier>):Panier{
    return this.panierService.updatePanierById(id,updateProduitDto)
}



}
