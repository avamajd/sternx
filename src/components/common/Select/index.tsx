import { SelectHTMLAttributes } from "react";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<ISelect> = ({ className = "", children, ...props }) => {
  return (
    <select className={`input ${className}`} {...props}>
      {children}
    </select>
  );
};

export { Select };
