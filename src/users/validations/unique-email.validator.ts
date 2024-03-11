import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint,
         ValidatorConstraintInterface 
        } from "class-validator";
import { UsersService } from "../users.service";

@ValidatorConstraint({ name: 'uniqueEmail', async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface{
    constructor(private readonly usersService: UsersService){}
    async validate(email: string){
        try{
            await this.usersService.finByEmail(email);
            return true;
        }catch(e){
            return false;
        }
    }
defaultMessage(): string {
    return 'Email already exists'
    
}        
}