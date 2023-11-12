import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInput> = ({ className = "", ...props }) => {
  return <input className={`input ${className}`} {...props} />;
};

export default Input;
