import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: any) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees with limit ${limit} and offset of ${offset}`;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  //   findOne(@Param() params) {
  findOne(@Param('id') id: string) {
    // return `This action returns a #${id} coffee`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This update the coffee with id ${id} with the following body ${body}`;
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This removes the coffee with id ${id}`;
    return this.coffeesService.remove(id);
  }
}
