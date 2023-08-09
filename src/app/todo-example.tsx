import ky from 'ky';
import { useEffect, useState } from 'react';

export type Todo = {
  id: string;
  createdAt: string;
  title: string;
  text: string;
};

export function TodoExample() {
  const [todo, setTodo] = useState<Todo>({
    id: '',
    createdAt: '',
    title: '',
    text: '',
  });

  useEffect(() => {
    async function fetchData() {
      const response = await ky.get(
        'https://64cbf0d32eafdcdc85198054.mockapi.io/todos/1'
      );

      const json = (await response.json()) as unknown as Todo;

      setTodo(json)
    }

    fetchData();
  }, []);

  return (
    <div>
      <p className="font-bold mb-2">Title: {todo.title}</p>
      <p className="text-sm">{todo.text}</p>
    </div>
  );
}
