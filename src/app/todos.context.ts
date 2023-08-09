import { createContext } from 'react';
import { TodoProps } from './todo';

export type TodosContextType = {
  deleteTodo: (id: string) => Promise<void>;
  addTodo: (todo: Pick<TodoProps, 'title' | 'text'>) => Promise<void>;
  submitEditedTodo: (todo: TodoProps) => Promise<void>;
  editTodo: (todo: TodoProps) => void;
  showInput: () => void;
};

export const TodosContext = createContext<TodosContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  deleteTodo: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addTodo: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  submitEditedTodo: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  editTodo: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  showInput: () => {},
});
