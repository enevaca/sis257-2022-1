import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterpreteEntity } from './entities/interprete.entity';
import { InterpreteController } from './interprete.controller';
import { InterpreteService } from './interprete.service';

type MockType<T> = { [P in keyof T]?: jest.Mock<{}> };

const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({}),
);

describe('InterpreteController', () => {
  let controller: InterpreteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterpreteController],
      providers: [
        InterpreteService,
        { provide: getRepositoryToken(InterpreteEntity), useFactory: repositoryMockFactory },
      ],
    }).compile();

    controller = module.get<InterpreteController>(InterpreteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
