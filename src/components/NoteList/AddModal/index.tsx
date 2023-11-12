import { useState } from "react";
import Modal from "../../common/Modal";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Textarea from "../../common/TextArea";
import { Select } from "../../common/Select";
import useNoteStore from "../../../store/useNoteStore";
import { ContentType } from "../../../types/note";
import NewNote from "../../../assets/icons/new-note.svg";

interface IAddModal {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: React.FC<IAddModal> = ({ isOpen, onClose }) => {
  const { addNote } = useNoteStore();

  const [newNote, setNewNote] = useState({
    date: Date.now(),
    author: "Test User",
    title: "",
    tag: ContentType.Info,
    description: "",
  });

  const handleSaveNote = () => {
    addNote(newNote);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };
  console.log(newNote);

  return (
    <Modal title="Add New Note" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col max-w-md mx-auto">
        <h2 className="text-gray-700 text-lg font-bold self-center flex mb-5">
          <img src={NewNote} alt="new note" className="w-7 mr-2" />
          <span>Create New Note</span>
        </h2>

        <Input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleChange}
          className="mb-3"
        />

        <Select
          name="tag"
          placeholder="Select an option"
          value={newNote.tag}
          onChange={handleChange}
          className="mb-3"
        >
          {Object.values(ContentType).map((option) => (
            <option key={option} value={option} label={option} />
          ))}
        </Select>

        <Textarea
          name="description"
          placeholder="description"
          rows={4}
          value={newNote.description}
          onChange={handleChange}
        />

        <div className="flex gap-3 mt-10">
          <Button onClick={onClose} variant="outlined" className="w-full">
            Cancel
          </Button>
          <Button onClick={handleSaveNote} className="w-full">
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
