import { IsEmail,IsEnum,IsString, isNotEmpty } from "class-validator";



export class CreateUserDto{
    @IsString()
    firstName:string;


    @IsString()
    lastName:string;

    @IsEmail()
    email:string;
    
    @IsString()
    password:string;
    
    @IsEnum(["Admin" , "secretaire" , "fournisseur" , "magasiner" , "client"],{
        message: 'valid role required'
    })
    role:"Admin" | "secretaire" | "fournisseur" | "magasiner" | "client";

}