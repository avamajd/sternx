import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../../common/Modal";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Textarea from "../../common/TextArea";
import { Select } from "../../common/Select";
import useNoteStore from "../../../store/useNoteStore";
import { ContentType, Note } from "../../../types/note";
import NewNote from "../../../assets/icons/new-note.svg";

interface IAddModal {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: React.FC<IAddModal> = ({ isOpen, onClose }) => {
  const { addNote } = useNoteStore();

  const defaultValues: Note = {
    date: Date.now(),
    author: "Test User",
    title: "",
    tag: ContentType.Info,
    description: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Note>({ defaultValues });

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<Note> = (data) => {
    addNote(data);
    handleClose();
  };

  return (
    <Modal title="Add New Note" isOpen={isOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-md mx-auto"
      >
        <h2 className="text-gray-700 text-lg font-bold self-center flex mb-5">
          <img src={NewNote} alt="new note" className="w-7 mr-2" />
          <span>Create New Note</span>
        </h2>

        <Input
          register={{
            ...register("title", {
              required: "Title is required",
            }),
          }}
          placeholder="Title"
          error={errors.title?.message}
          className="mb-3"
        />

        <Select
          register={{ ...register("tag", { required: "Tag is required" }) }}
          placeholder="Select an option"
          error={errors.tag?.message}
          className="mb-3"
        >
          {Object.values(ContentType).map((option) => (
            <option key={option} value={option} label={option} />
          ))}
        </Select>

        <Textarea
          register={{
            ...register("description", {
              required: "Description is required",
            }),
          }}
          error={errors.description?.message}
          placeholder="Description"
          rows={4}
        />

        <div className="flex gap-3 mt-10">
          <Button
            type="button"
            onClick={handleClose}
            variant="outlined"
            className="w-full"
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full">
            Add
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddModal;
