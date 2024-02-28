import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { FactureService } from './facture.service';
import {Facture} from '../../models/facture';

@Controller('facture')
export class FactureController {

constructor(private readonly factureService:FactureService){}
@Post()
create (@Body() createFactureDto:Facture):Facture{
    return this.factureService.createFacture(createFactureDto);
}
@Get()
findAll(): Promise<Facture[]>{
   return this.factureService.getAllFacture();
}
@Get(':id')
findOne(@Param('id') id:number):Facture{
    return this.factureService.getFactureById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Facture{
    return this.factureService.deleteFactureById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateFactureDto:Partial<Facture>):Facture{
    return this.factureService.updateFactureById(id,updateFactureDto)
}



}
