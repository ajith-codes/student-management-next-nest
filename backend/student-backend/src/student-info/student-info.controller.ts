import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentInfoService } from './student-info.service';
import { CreateStudentInfoDto } from './dto/create-student-info.dto';
import { UpdateStudentInfoDto } from './dto/update-student-info.dto';

@Controller( 'studentInfo' )
export class StudentInfoController {
  constructor(private readonly studentInfoService: StudentInfoService) {}

  @Post()
  create(@Body() createStudentInfoDto: CreateStudentInfoDto) {
    return this.studentInfoService.create(createStudentInfoDto);
  }

  @Get()
  getAll() {
    return this.studentInfoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentInfoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentInfoDto: UpdateStudentInfoDto) {
    return this.studentInfoService.update(id, updateStudentInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentInfoService.remove(id);
  }
}
