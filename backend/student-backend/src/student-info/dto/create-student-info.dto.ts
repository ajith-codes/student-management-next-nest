import { Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Length,
} from 'class-validator';

export class CreateStudentInfoDto {
  @IsString()
  full_name: string;

  @Type(() => Number)
  @IsInt()
  @Min(10)
  roll_number: number;

  @IsString()
  class_name: string;

  @Type(() => Number)
  @IsInt()
  @Min(14)
  age: number;

  @IsString()
  @Length(10, 15) 
  contact_number: string;

  @IsEmail()
  email: string;

}
