import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { CategoriesService } from './categorie.service';
import {Categorie } from '../../models/categorie';
@Controller('categorie')
export class CategoriesController {

constructor(private readonly categoriesService:CategoriesService){}
@Post()
create(@Body()createCategorieDto:Categorie):Categorie{
    return this.categoriesService.createCategorie(createCategorieDto);
}
@Get()
findAll(): Promise<Categorie[]>{
   return this.categoriesService.getAllCategorie();
}
@Get(':id')
findOne(@Param('id') id:number):Categorie{
    return this.categoriesService.getCategorieById(id);
}
@Delete(':id')
remove(@Param('id') id:number):Categorie{
    return this.categoriesService.deleteCategorieById(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() updateProduitDto:Partial<Categorie>):Categorie{
    return this.categoriesService.updateCategorieById(id,updateProduitDto)
}


}
