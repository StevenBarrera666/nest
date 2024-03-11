import { Body, Controller,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/users/users.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
    async login (@Body()loginDto: LoginDto):Promise<User>{
        return this.authService.validateUser(loginDto.email,loginDto.password)
    }
}
