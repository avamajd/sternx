import { useState } from "react";
import AddModal from "../NoteList/AddModal";
import Button from "../common/Button";
import useNoteStore from "../../store/useNoteStore";

interface IHeader {
  title: string;
  subtitle: string;
  imgUrl?: string;
}

// const defaultImage = require("./image.jpg");

const Header: React.FC<IHeader> = ({
  title,
  subtitle,
  // imgUrl = defaultImage,
}) => {
  const { notes } = useNoteStore();
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="bg-blue-gray p-4 rounded-b-lg mb-5 flex items-center justify-between">
      {/* <img
          src={imgUrl}
          alt="Header"
          className="mr-2"
        /> */}
      <div>
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-700">{subtitle}</p>
      </div>
      {!!notes.length && (
        <>
          <Button onClick={toggleModal}>Add Note</Button>
          <AddModal isOpen={isOpen} onClose={toggleModal} />
        </>
      )}
    </div>
  );
};

export default Header;
