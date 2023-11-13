import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: UseFormRegisterReturn;
  error?: string;
}

const Textarea: React.FC<ITextarea> = ({
  register,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <textarea
        className={`input ${error ? "error-input" : ""}`}
        {...props}
        {...register}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Textarea;
