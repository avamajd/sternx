import Button from "../Button";

interface IModal {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 h-full w-2/3 bg-white p-4 shadow-md">
      <div className="flex justify-between">
        <span className="text-gray-700">{title}</span>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
      </div>

      {children}
    </div>
  );
};

export default Modal;
