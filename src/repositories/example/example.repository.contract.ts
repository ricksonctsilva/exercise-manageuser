import { Example } from "../../entities/example.entity";

export default interface IExampleRepository {
  create(data: Example): Promise<Example>
  findById(id: string): Promise<Example>
  delete(id: string): Promise<Example>
  update(data: Example): Promise<Example>
}
