import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Example } from "../entities/example.entity";
import { ExampleService } from "../services/example.service";

@Controller("/api/examples")
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: Example): Promise<Example> {
    return await this.exampleService.create(payload);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string): Promise<Example> {
    return await this.exampleService.findById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<Example[]> {
    return await this.exampleService.getAll();
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string): Promise<Example> {
    return await this.exampleService.delete(id);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() payload: Example): Promise<Example> {
    return await this.exampleService.update(id, payload);
  }
}
