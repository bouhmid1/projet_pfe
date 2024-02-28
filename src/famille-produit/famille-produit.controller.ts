import { Body,Controller,Post,Get,Param,Put,Delete } from '@nestjs/common';
import { familleProduitService } from './famille-produit.service';
import {familleProduit} from '../../models/familleproduit';

@Controller('familleproduit')
export class familleProduitController {
   
    constructor(private readonly familleProduitService:familleProduitService){}
    @Post()
    create (@Body() createfamilleProduitDto:familleProduit):familleProduit{
        return this.familleProduitService.createfamilleProduit(createfamilleProduitDto);
    }
    @Get()
    findAll(): Promise<familleProduit[]>{
       return this.familleProduitService.getAllfamilleProduit();
    }
    @Get(':id')
    findOne(@Param('id') id:number):familleProduit{
        return this.familleProduitService.getfamilleProduitById(id);
    }
    @Delete(':id')
    remove(@Param('id') id:number):familleProduit{
        return this.familleProduitService.deletefamilleProduitById(id)
    }
    
    @Put(':id')
    update(@Param('id') id:number,@Body() updatefamilleProduitDto:Partial<familleProduit>):familleProduit{
        return this.familleProduitService.updatefamilleProduitById(id,updatefamilleProduitDto)
    }
    
    









}

