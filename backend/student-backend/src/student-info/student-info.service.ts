import { Injectable } from '@nestjs/common';
import { CreateStudentInfoDto } from './dto/create-student-info.dto';
import { UpdateStudentInfoDto } from './dto/update-student-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentInfo } from './entities/student-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentInfoService {
  
  constructor(
    @InjectRepository(StudentInfo)
    private readonly studentRepository: Repository<StudentInfo>,
  ) {}
  
  getAll(){
    return this.studentRepository.find()
  }
  async create(createStudentInfoDto: CreateStudentInfoDto) {
    const newStudent = this.studentRepository.create(createStudentInfoDto);
    return await this.studentRepository.save(newStudent);
  }

  findAll() {
    return `This action returns all studentInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentInfo`;
  }

  update(id: number, updateStudentInfoDto: UpdateStudentInfoDto) {
    return `This action updates a #${id} studentInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentInfo`;
  }
}
