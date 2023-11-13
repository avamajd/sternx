import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  error?: string;
}

const Input: React.FC<IInput> = ({
  register,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <input
        className={`input ${error ? "error-input" : ""}`}
        {...props}
        {...register}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
