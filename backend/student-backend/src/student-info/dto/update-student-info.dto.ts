import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentInfoDto } from './create-student-info.dto';

export class UpdateStudentInfoDto extends PartialType(CreateStudentInfoDto) {}
