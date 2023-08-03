import { useEffect, useState } from 'react';
import { NoteProps } from './note';
import { NotesList } from './notes-list';
import { NotesContext, NotesContextType } from './notes.context';

export interface NotesProps {
  initialNotes: NoteProps[];
}

export function Notes(props: NotesProps) {
  const [notes, setNotes] = useState(props.initialNotes);

  const [newNote, setNewNote] = useState('');

  useEffect(() => setNewNote(''), [notes]);

  function addNote(text: string) {
    setNotes([...notes, { text: newNote, id: notes.length }]);
  }

  function removeNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <NotesContext.Provider value={{ notes: notes, addNote, removeNote }}>
      <div className="m-4 flex flex-col gap-2 w-96">
        <div className="flex justify-between">
          <input
            className="border-2 border-black w-full"
            type="text"
            // onChange={(event) => setNotes([...notes, { text: event.target.value }])}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={(e) =>
              e.key === 'Enter'
                ? setNotes([...notes, { text: newNote, id: notes.length }])
                : // eslint-disable-next-line @typescript-eslint/no-empty-function
                  () => {}
            }
          />
          <button
            onClick={() =>
              setNotes([...notes, { text: newNote, id: notes.length }])
            }
          >
            Create note
          </button>
        </div>

        <NotesList notes={notes}></NotesList>
      </div>
    </NotesContext.Provider>
  );
}
