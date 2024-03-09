import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.userModel.findById(id);
    } catch (error) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, userDto: CreateUserDto): Promise<User> {
    if (userDto.password) {
      const hashedPassword = await bcrypt.hash(userDto.password, 10);
      userDto = {
        ...userDto,
        password: hashedPassword,
      };
    }
    try {
      return await this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const user = await this.userModel.findByIdAndDelete(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return true;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }
}
