import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import {Paiement} from '../../models/paiement';

@Controller('paiement')
export class PaiementController {

constructor(private readonly paiementService:PaiementService){}
@Post()
create (@Body() createPaiementDto:Paiement):Paiement{
    return this.paiementService.createPaiement(createPaiementDto);
}
@Get()
findAll(): Promise<Paiement[]>{
   return this.paiementService.getAllPaiement();
}
@Get(':id')
findOne(@Param('id') id:number):Paiement{
    return this.paiementService.getPaiementById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Paiement{
    return this.paiementService.deletePaiementById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updatePaiementDto:Partial<Paiement>):Paiement{
    return this.paiementService.updatePaiementById(id,updatePaiementDto)
}



}
