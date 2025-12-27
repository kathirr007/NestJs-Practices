import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Coffee no.1',
      flavors: ['chocolate', 'vanilla'],
      brand: 'Coffee brand 01',
    },
    {
      id: 2,
      name: 'Coffee no.2',
      flavors: ['caramel', 'hazelnut'],
      brand: 'Coffee brand 02',
    },
    {
      id: 3,
      name: 'Coffee no.3',
      flavors: ['mocha', 'almond'],
      brand: 'Coffee brand 03',
    },
    {
      id: 4,
      name: 'Coffee no.4',
      flavors: ['toffee', 'cinnamon'],
      brand: 'Coffee brand 04',
    },
    {
      id: 5,
      name: 'Coffee no.5',
      flavors: ['irish cream', 'coconut'],
      brand: 'Coffee brand 05',
    },
  ];

  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne({ where: { id: +id } });
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });

    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }

    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);

    return this.coffeeRepository.remove(coffee);
  }
}
