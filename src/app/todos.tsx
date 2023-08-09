import { useEffect, useState } from 'react';
import { TodoList } from './todo-list';
import { TodoProps } from './todo';
import ky from 'ky';
import { TodosContext } from './todos.context';
import { TodoInput } from './todo-input';
import { TodoEdit, TodoEditProps } from './todo-edit';

export function Todos() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [kurva, setKurva] = useState<'todoInput' | 'editTodo'>('todoInput');

  const [editedTodo, setEditedTodo] = useState<TodoProps>({
    id: '',
    createdAt: '',
    title: '',
    text: '',
  });

  async function fetchData() {
    const response = await ky.get(
      'https://64cbf0d32eafdcdc85198054.mockapi.io/todos'
    );

    const json = (await response.json()) as unknown as TodoProps[];

    setTodos(json);
  }

  async function deleteTodo(id: string) {
    const response = await ky.delete(
      `https://64cbf0d32eafdcdc85198054.mockapi.io/todos/${id}`
    );

    await fetchData();
  }

  async function addTodo(todo: Pick<TodoProps, 'title' | 'text'>) {
    const response = await ky.post(
      'https://64cbf0d32eafdcdc85198054.mockapi.io/todos',
      {
        json: todo,
      }
    );

    fetchData();
  }

  async function submitEditedTodo(editedTodo: TodoProps) {
    const response = await ky.put(
      `https://64cbf0d32eafdcdc85198054.mockapi.io/todos/${editedTodo.id}`,
      {
        json: { text: editedTodo.text, title: editedTodo.title },
      }
    );

    setKurva('todoInput');

    fetchData();
  }

  function editTodo(todo: TodoProps) {
    setKurva('editTodo');
    setEditedTodo(todo);
  }

  function showInput(){
    setKurva('todoInput')
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TodosContext.Provider
      value={{ deleteTodo, addTodo, editTodo, submitEditedTodo, showInput }}
    >
      <div className="p-4">
        <div className="pb-4">
          {(() => {
            switch (kurva) {
              case 'todoInput':
                return <TodoInput />;
                break;
              case 'editTodo':
                return <TodoEdit todo={editedTodo} />;
            }
          })()}
        </div>
        <hr className='mb-4 border w-[90%] mx-auto'/>
        <TodoList data={todos} />
      </div>
    </TodosContext.Provider>
  );
}
