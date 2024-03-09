import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'El  correo no tiene un formato valido' })
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
