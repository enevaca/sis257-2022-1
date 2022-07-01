import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneroEntity } from './entities/genero.entity';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  save: jest.fn(),
  // ...
}));

describe('GeneroController', () => {
  let controller: GeneroController;
  //let repositoryMock: MockType<Repository<GeneroEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneroController],
      providers: [
        GeneroService,
        { provide: getRepositoryToken(GeneroEntity), useFactory: repositoryMockFactory },
      ],
    }).compile();

    controller = module.get<GeneroController>(GeneroController);
    //repositoryMock = module.get(getRepositoryToken(GeneroEntity));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
