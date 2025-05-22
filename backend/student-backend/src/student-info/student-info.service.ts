import { Injectable  } from '@nestjs/common';
import { CreateStudentInfoDto } from './dto/create-student-info.dto';
import { UpdateStudentInfoDto } from './dto/update-student-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentInfo } from './entities/student-info.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

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
    const newStudent = this.studentRepository.create({
      ...createStudentInfoDto,registered_at: new Date()});
    return await this.studentRepository.save(newStudent);
  }

  async findOne(id: string): Promise<StudentInfo | null> {
  return await this.studentRepository.findOne({
    where: { _id: new ObjectId(id) },
  });
  }

 async update(id: string, updateStudentInfoDto: UpdateStudentInfoDto) {
  
  const objectId = new ObjectId(id);
   await this.studentRepository.update({
    _id: objectId},updateStudentInfoDto
  )
    return { message: 'Student updated successfully', id };
  }

  async remove(id: string) {
      const objectId = new ObjectId(id);

    await this.studentRepository.delete({
       _id: objectId
    });
      return { message: `Student with id ${id} deleted successfully` };

  }
}
