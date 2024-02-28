import { Body,Controller,Post,Delete,Get,Param,Put } from '@nestjs/common';
import { sousCategoriesService } from './sous-categorie.service';
import {sousCategorie} from '../../models/categorie';
@Controller('souscategorie')
export class SousCategoriesController {

constructor(private readonly sousCategoriesService:sousCategoriesService){}
@Post()
create(@Body()createsousCategoriesDto:sousCategorie):sousCategorie{
    return this.sousCategoriesService.createsousCategorie(createsousCategoriesDto);
}
@Get()
findAll(): Promise<sousCategorie[]>{
   return this.sousCategoriesService.getAllsousCategorie();
}
@Get(':id')
findOne(@Param('id') id:number):sousCategorie{
    return this.sousCategoriesService.getsousCategorieById(id);
}
@Delete(':id')
remove(@Param('id') id:number):sousCategorie{
    return this.sousCategoriesService.deletesousCategorieById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateProduitDto:Partial<sousCategorie>):sousCategorie{
    return this.sousCategoriesService.updatesousCategorieById(id,updateProduitDto)
}


}