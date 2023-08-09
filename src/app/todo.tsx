import { useContext } from 'react';
import { TodosContext } from './todos.context';

export interface TodoProps {
  id: string;
  createdAt: string;
  title: string;
  text: string;
}

export function Todo(props: TodoProps) {
  const { editTodo, deleteTodo, showInput } = useContext(TodosContext);

  return (
    <div className="text-white border-2 p-2 relative">
      <div className="text-sm italic">
        <span>id: {props.id}, </span>
        <span>{props.createdAt}</span>
      </div>
      <p className="text-lg font-semibold">{props.title}</p>
      <p className="break-words">{props.text}</p>

      <div className="flex gap-1 absolute top-2 right-2">
        <button
          onClick={() => editTodo(props)}
          className="px-1 rounded text-slate-500 bg-white font-extrabold"
        >
          Edit
        </button>
        <button
          onClick={async () => {
            await deleteTodo(props.id);
            showInput();
          }}
          className="w-6 h-6 rounded text-slate-500 bg-white font-extrabold"
        >
          x
        </button>
      </div>
    </div>
  );
}
