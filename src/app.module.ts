import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousesController } from './houses/houses.controller';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); //Cargamos las variables de configuracion

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController, HousesController],
  providers: [AppService],
})
export class AppModule {}
