import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';

@ValidatorConstraint({ name: 'uniqueEmail', async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(email: string): Promise<boolean> {
    try {
      const existEmail = await this.usersService.findByEmail(email);
      if (!existEmail) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage(): string {
    return 'Email already exists';
  }
}
