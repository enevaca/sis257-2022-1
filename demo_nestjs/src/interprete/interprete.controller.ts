import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InterpreteService } from './interprete.service';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { InterpreteEntity } from './entities/interprete.entity';

@Controller('interprete')
export class InterpreteController {
  constructor(private readonly interpreteService: InterpreteService) {}

  @Post()
  create(
    @Body() createInterpreteDto: CreateInterpreteDto,
  ): Promise<InterpreteEntity> {
    return this.interpreteService.create(createInterpreteDto);
  }

  @Get()
  findAll(): Promise<InterpreteEntity[]> {
    return this.interpreteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<InterpreteEntity> {
    return this.interpreteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInterpreteDto: UpdateInterpreteDto,
  ): Promise<InterpreteEntity> {
    return this.interpreteService.update(+id, updateInterpreteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.interpreteService.remove(+id);
  }
}
