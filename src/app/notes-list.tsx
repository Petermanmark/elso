import { Note, NoteProps } from './note';

export interface NotesList {
  notes: NoteProps[];
}

export function NotesList(props: NotesList) {
  return (
    <div className="flex flex-col border-2 border-black p-4 gap-2">
      {props.notes.map((note, index) => (
        <Note text={note.text} id={index} />
      ))}
    </div>
  );
}
