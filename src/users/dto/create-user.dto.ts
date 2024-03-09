import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { UniqueEmailValidator } from '../validations/unique-email.validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: string;
  @IsNotEmpty()
  @MinLength(3, { message: 'El nombre debe tener minimo 3 letras' })
  @IsString({ message: 'Eyy pilas con el nombre' })
  readonly name: string;
  readonly lastname: string;
  @IsNotEmpty()
  @IsEmail({}, { message: 'El  correo no tiene un formato valido' })
  @Validate(UniqueEmailValidator, { message: 'El correo ya fue registrado' })
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, {
    message:
      'La contraseña debe tener al menos 8 caracteres, comenzar con una letra mayúscula y contener al menos un carácter especial',
  })
  readonly password: string;
}
