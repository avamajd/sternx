import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegisterReturn;
  error?: string;
}

const Select: React.FC<ISelect> = ({
  register,
  error,
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <select
        className={`input ${error ? "error-input" : ""}`}
        {...props}
        {...register}
      >
        {children}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export { Select };
