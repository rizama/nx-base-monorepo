import { Injectable } from '@nestjs/common';
import { Todo } from '@nx-base-monorepo/data-type';

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
