import { Example } from "src/entities/example.entity";
import IExampleRepository from "src/repositories/example/example.repository.contract";

export class ExampleService {
  constructor(
    private readonly exampleRepository: IExampleRepository
  ) {}

  create(data: Example): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  update(id: string, data: Example): Promise<Example> {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Example[]> {
    throw new Error("Method not implemented.");
  }
}
