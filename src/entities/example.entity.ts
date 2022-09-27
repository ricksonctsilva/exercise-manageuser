import { v4 as uuid } from 'uuid';

export class Example {
  id: string
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<Example, "id" | "createdAt" >,
    id?: string
  ) {
    Object.assign(this, props)
    this.id = id ?? uuid()
  }
}
