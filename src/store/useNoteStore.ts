import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { INoteCard, Note } from "../types/note";

interface NoteStore {
  notes: INoteCard[];
  addNote: (note: Note) => void;
}

const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, { ...note, id: uuidv4() }],
    })),
}));

export default useNoteStore;
