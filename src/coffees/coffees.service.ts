import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
import { Coffee } from 'src/coffees/entities/coffee.entity';

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

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // Update the existing coffee
    }
  }

  delete(id: string) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
