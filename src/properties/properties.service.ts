import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './property.entity';
import { ILike, Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async getAll(search?: string) {
    let properties;

    if (search) {
      properties = await this.propertyRepository.find({
        where: [{ name: ILike(`%${search}%`) }, { city: ILike(`%${search}%`) }],
        order: {
          createdAt: 'DESC',
        },
      });
    } else {
      properties = await this.propertyRepository.find({
        order: {
          createdAt: 'DESC',
        },
      });
    }

    return properties;
  }

  create(createPropertyDto: CreatePropertyDto) {
    let property = this.propertyRepository.create(createPropertyDto);

    return this.propertyRepository.save(property);
  }
}
