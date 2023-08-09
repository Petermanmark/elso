import { useContext, useEffect, useState } from 'react';
import { TodoProps } from './todo';
import { TodosContext } from './todos.context';

export interface TodoEditProps {
  todo: TodoProps;
}

export function TodoEdit(props: TodoEditProps) {
  const [title, setTitle] = useState(props.todo.title);
  const [text, setText] = useState(props.todo.text);
  const { deleteTodo, submitEditedTodo, showInput } = useContext(TodosContext);

  useEffect(() => {
    setTitle(props.todo.title);
    setText(props.todo.text);
  }, [props.todo]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        <div className="mb-2 border-2 text-white p-2 relative">
          <div className="text-sm italic">
            <span>id: {props.todo.id}, </span>
            <span>{props.todo.createdAt}</span>
          </div>
          <input
            className="block bg-slate-500 text-white text-lg font-semibold w-full border-none focus:outline-none focus:bg-slate-600"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                (e.currentTarget.nextElementSibling as HTMLElement).focus();
              }
            }}
          />
          <textarea
            className="block bg-slate-500 text-white w-full focus:outline-none focus:bg-slate-600 resize-none h-[9.5rem]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitEditedTodo({
                  id: props.todo.id,
                  createdAt: props.todo.createdAt,
                  text,
                  title,
                });
              }
            }}
          />
          <button
            onClick={async () => {
              await deleteTodo(props.todo.id);
              showInput();
            }}
            className="w-6 h-6 rounded text-slate-500 bg-white font-extrabold top-2 right-2 absolute"
          >
            x
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        <div className="flex gap-2">
          <button
            className="rounded bg-blue-300 p-1 w-full"
            onClick={() =>
              submitEditedTodo({
                id: props.todo.id,
                createdAt: props.todo.createdAt,
                text,
                title,
              })
            }
          >
            Edit todo
          </button>
          <button
            className="rounded bg-red-300 p-1 w-full"
            onClick={() => showInput()}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
