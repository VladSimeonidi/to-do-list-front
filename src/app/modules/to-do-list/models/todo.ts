export interface Todo {
  _id: string,
  title: string,
  description: string,
  isCompleted: boolean,
  owner: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
  __v: number,
}

export interface todosGroupedByIsCompleted {
  todo: Todo[],
  done: Todo[]
}

