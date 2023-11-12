import { TextareaHTMLAttributes } from "react";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<ITextarea> = ({ className = "", ...rest }) => {
  return <textarea className={`input ${className}`} {...rest} />;
};

export default Textarea;
