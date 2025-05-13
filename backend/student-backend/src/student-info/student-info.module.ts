import { Module } from '@nestjs/common';
import { StudentInfoService } from './student-info.service';
import { StudentInfoController } from './student-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentInfo } from './entities/student-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentInfo])],
  controllers: [StudentInfoController],
  providers: [StudentInfoService],
})
export class StudentInfoModule {}
