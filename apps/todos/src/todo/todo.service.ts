import { Injectable } from '@nestjs/common';

export type Todo = {
  message: string;
  done: boolean;
};

const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue learn nx', done: false },
];

@Injectable()
export class TodoService {
    getTodos(): Todo[] {
        return todos;
    }
}
