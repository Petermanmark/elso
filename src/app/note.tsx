import { useContext } from 'react';
import { NotesContext } from './notes.context';

export interface NoteProps {
  id: number;
  text: string;
}

export function Note(props: NoteProps) {
  const { removeNote } = useContext(NotesContext);

  return (
    <div className="border border-black w-max rounded p-2 relative pr-6">
      {props.text}
      <button
        onClick={() => removeNote(props.id)}
        className="w-4 h-4 flex border rounded-full border-red-500 text-red-500 absolute top-1 right-1 justify-center items-center bg-red-500"
      >
        <span className="text-xs text-white">x</span>
      </button>
    </div>
  );
}
