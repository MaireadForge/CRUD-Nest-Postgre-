import {
  IsEmail,
  IsInt,
  IsString,
  Min,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  department!: string;

  @IsInt()
  @Min(0)
  salary!: number;
}