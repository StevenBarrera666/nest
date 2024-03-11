import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import * as dotenv from 'dotenv'

dotenv.config();// cargamos las variables de configuracion

@Module({
  imports: [UsersModule, 
    MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
