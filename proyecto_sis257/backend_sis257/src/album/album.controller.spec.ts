import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumController } from 'src/album/album.controller';
import { AlbumService } from 'src/album/album.service';
import { Repository } from 'typeorm';
import { AlbumEntity } from './entities/album.entity';

type MockType<T> = { [P in keyof T]?: jest.Mock<{}> };

const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({}),
);

describe('AlbumController', () => {
  let module: TestingModule;
  let controller: AlbumController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ envFilePath: `.env` }),
        TypeOrmModule.forFeature([AlbumEntity]),
        TypeOrmModule.forRoot({
          type: process.env.DB_TYPE as any,
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: ['./**/*.entity.ts'],
          synchronize: false,
        }),
      ],
      controllers: [AlbumController],
      providers: [AlbumService],
    }).compile();

    controller = module.get<AlbumController>(AlbumController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
