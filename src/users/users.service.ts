import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users(): Array<string> {
    return [];
  }
}
