import { Injectable } from "@nestjs/common";
import { Pageable } from "../../configs/database/pageable.service";
import { PrismaService } from "../../configs/database/prisma.service";
import { Example } from "src/entities/example.entity";
import IExampleRepository from "./example.repository.contract";

@Injectable()
export class ExampleRepository extends Pageable<Example> implements IExampleRepository{
  constructor(
    private readonly repository: PrismaService
  ) {
    super()
  }

  create(data: Example): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  update(data: Example): Promise<Example> {
    throw new Error("Method not implemented.");
  }
}
