import { Test, TestingModule } from '@nestjs/testing';
import { StudentInfoController } from './student-info.controller';
import { StudentInfoService } from './student-info.service';

describe('StudentInfoController', () => {
  let controller: StudentInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentInfoController],
      providers: [StudentInfoService],
    }).compile();

    controller = module.get<StudentInfoController>(StudentInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
