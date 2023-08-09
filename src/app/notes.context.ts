import { createContext } from 'react';
import { NoteProps } from './note';

export type NotesContextType = {
  notes: NoteProps[];
  addNote: (text: string) => void;
  removeNote: (id: number) => void;
};

export const NotesContext = createContext<NotesContextType>({
  notes: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addNote: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeNote: () => {},
});
