import { useState } from 'react';
import { NoteProps } from './note';
import { NotesList } from './notes-list';
import { NotesContext } from './notes.context';
import { NoteInput } from './note-input';

export interface NotesProps {
  initialNotes: NoteProps[];
}

export function Notes(props: NotesProps) {
  const [notes, setNotes] = useState(props.initialNotes);

  function addNote(text: string) {
    setNotes([...notes, { text: text, id: notes.length }]);
  }

  function removeNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <NotesContext.Provider value={{ notes: notes, addNote, removeNote }}>
      <div className="m-4 flex flex-col gap-2 w-96">
        <NoteInput />

        <NotesList notes={notes}></NotesList>
      </div>
    </NotesContext.Provider>
  );
}
