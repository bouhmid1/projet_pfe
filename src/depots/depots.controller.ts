import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { DepotsService } from './depots.service';
import {Depots} from '../../models/depots';

@Controller('depots')
export class DepotsController {

constructor(private readonly depotsService:DepotsService){}
@Post()
create (@Body() createDepotsDto:Depots):Depots{
    return this.depotsService.createDepots(createDepotsDto);
}
@Get()
findAll(): Promise<Depots[]>{
   return this.depotsService.getAllDepots();
}
@Get(':id')
findOne(@Param('id') id:number):Depots{
    return this.depotsService.getDepotsById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Depots{
    return this.depotsService.deleteDepotsById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateDepotsDto:Partial<Depots>):Depots{
    return this.depotsService.updateDepotsById(id,updateDepotsDto)
}



}
