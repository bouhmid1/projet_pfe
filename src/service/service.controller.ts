import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { ServiceService } from './service.service';
import {Service} from '../../models/service';

@Controller('service')
export class ServiceController {

constructor(private readonly serviceService:ServiceService){}
@Post()
create (@Body() createServiceDto:Service):Service{
    return this.serviceService.createService(createServiceDto);
}
@Get()
findAll(): Promise<Service[]>{
   return this.serviceService.getAllService();
}
@Get(':id')
findOne(@Param('id') id:number):Service{
    return this.serviceService.getServiceById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Service{
    return this.serviceService.deleteServiceById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateServiceDto:Partial<Service>):Service{
    return this.serviceService.updateServiceById(id,updateServiceDto)
}



}
