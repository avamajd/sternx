import { useState } from "react";
import NoteCard from "./NoteCard";
import AddModal from "./AddModal";
import Button from "../common/Button";
import useNoteStore from "../../store/useNoteStore";

const NoteList: React.FC = () => {
  const { notes } = useNoteStore();
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      {!notes.length ? (
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4 text-2xl text-gray-400">
            No note added to this device yet
          </p>
          <Button onClick={toggleModal}>Add Note</Button>
        </div>
      ) : (
        <ul className="flex flex-col gap-5">
          {notes.map(({ id, date, author, title, tag, description }) => (
            <NoteCard
              key={id}
              id={id}
              date={date}
              author={author}
              title={title}
              tag={tag}
              description={description}
            />
          ))}
        </ul>
      )}

      <AddModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
};

export default NoteList;
