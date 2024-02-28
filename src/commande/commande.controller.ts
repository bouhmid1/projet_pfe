import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { CommandeService } from './commande.service';
import {Commande} from '../../models/commande';

@Controller('commande')
export class CommandeController {

    constructor(private readonly commandeService:CommandeService){}
@Post()
create (@Body() createcommandeDto:Commande):Commande{
    return this.commandeService.createPanier(createcommandeDto);
}
@Get()
findAll(): Promise<Commande[]>{
   return this.commandeService.getAllCommande();
}
@Get(':id')
findOne(@Param('id') id:number):Commande{
    return this.commandeService.getCommandeById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Commande{
    return this.commandeService.deleteCommandeById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateProduitDto:Partial<Commande>):Commande{
    return this.commandeService.updateCommandeById(id,updateProduitDto)
}



}
