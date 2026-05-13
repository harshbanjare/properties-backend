import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}
  @Get()
  getProperties(@Query('search') searchTerm?: string) {
    return this.propertiesService.getAll(searchTerm);
  }

  @Post()
  createProperty(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }
}
