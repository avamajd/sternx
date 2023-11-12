import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outlined";
}

const Button: React.FC<IButton> = ({
  children,
  variant = "solid",
  className = "",
  ...props
}) => {
  let buttonClassName =
    "py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none font-semibold text-lg";

  if (variant === "solid") {
    buttonClassName += ` bg-gray-800 text-white 
      active:bg-gray-500 active:text-gray-100 
      disabled:bg-gray-300 disabled:border-gray-50 disabled:text-white`;
  } else if (variant === "outlined") {
    buttonClassName += ` border border-gray-300 text-gray-800 
      hover:bg-gray-100 hover:border-gray-400 
      active:bg-gray-900 active:text-gray-50 
      disabled:bg-white disabled:border-gray-200 disabled:text-gray-400`;
  }

  return (
    <button className={`${buttonClassName} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
