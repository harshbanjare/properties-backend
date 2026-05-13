import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property.entity';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],
  imports: [TypeOrmModule.forFeature([Property])],
})
export class PropertiesModule {}
