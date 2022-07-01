import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CancionService } from './cancion.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@ApiTags('canciones')
@Controller('canciones')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Post()
  create(@Body() createCancionDto: CreateCancionDto) {
    return this.cancionService.create(createCancionDto);
  }

  @Get()
  findAll() {
    return this.cancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancionDto: UpdateCancionDto) {
    return this.cancionService.update(+id, updateCancionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionService.remove(+id);
  }
}
