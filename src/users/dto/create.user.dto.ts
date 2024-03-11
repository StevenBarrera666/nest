import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsNumber()
    readonly id: string;
    @IsNotEmpty()
    @MinLength(3,{message:'El nombre debe tener minimo 3 letras'})
    @IsString({message:'Eyy pilas con el nombre'})
    readonly name: string;
    readonly lastname: string;
    @IsNotEmpty()
    readonly email: string;
  
    readonly password: string;

    
}