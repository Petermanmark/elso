import { useContext, useEffect, useState } from 'react';
import { NotesContext } from './notes.context';

export function NoteInput() {
  const { addNote, notes } = useContext(NotesContext);

  const [newNote, setNewNote] = useState('');

  useEffect(() => setNewNote(''), [notes]);

  return (
    <div className="flex justify-between">
      <input
        className="border-2 border-black w-full"
        type="text"
        // onChange={(event) => setNotes([...notes, { text: event.target.value }])}
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        onKeyDown={(e) =>
          e.key === 'Enter'
            ? addNote(newNote)
            : // eslint-disable-next-line @typescript-eslint/no-empty-function
              () => {}
        }
      />
      <button onClick={() => addNote(newNote)}>Create note</button>
    </div>
  );
}
