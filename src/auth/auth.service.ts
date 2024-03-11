import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async validateUser(email: String,password:string):Promise<User>{
        try {
            const user = await this.userService.findByEmail(email);
            if(User && bcrypt.compareSync(password,user.password)){
                return user;
            }else{
                throw new HttpException('Forbbiden',HttpStatus.FORBIDDEN);
            }
        }catch(error){
            throw new HttpException('Forbbiden', HttpStatus.FORBIDDEN);
        }
    }
}
