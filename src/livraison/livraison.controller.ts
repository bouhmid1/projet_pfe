import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import {Livraison} from '../../models/livraison';

@Controller('livraison')
export class LivraisonController {

constructor(private readonly livraisonService:LivraisonService){}
@Post()
create (@Body() createLivraisonDto:Livraison):Livraison{
    return this.livraisonService.createLivraison(createLivraisonDto);
}
@Get()
findAll(): Promise<Livraison[]>{
   return this.livraisonService.getAllLivraison();
}
@Get(':id')
findOne(@Param('id') id:number):Livraison{
    return this.livraisonService.getLivraisonById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Livraison{
    return this.livraisonService.deleteLivraisonById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateLivraisonDto:Partial<Livraison>):Livraison{
    return this.livraisonService.updateLivraisonById(id,updateLivraisonDto)
}



}
