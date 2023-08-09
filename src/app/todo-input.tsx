import { useContext, useState } from 'react';
import { TodosContext } from './todos.context';

export function TodoInput() {
  const { addTodo } = useContext(TodosContext);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function handleSubmit() {
    if (text === '') {
      return;
    }
    addTodo({ title, text });
    setTitle('');
    setText('');
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        <div className="mb-2 border-2">
          <input
            className="block bg-slate-500 text-white p-2 text-lg font-semibold w-full border-none focus:outline-none focus:bg-slate-600"
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
            className="block bg-slate-500 text-white p-2 w-full focus:outline-none focus:bg-slate-600 resize-none h-[9.5rem]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        <button
          className="rounded bg-green-300 p-1 w-full"
          onClick={() => handleSubmit()}
        >
          Create todo
        </button>
      </div>
    </>
  );
}
