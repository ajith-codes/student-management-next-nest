import { Test, TestingModule } from '@nestjs/testing';
import { StudentInfoService } from './student-info.service';

describe('StudentInfoService', () => {
  let service: StudentInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentInfoService],
    }).compile();

    service = module.get<StudentInfoService>(StudentInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
