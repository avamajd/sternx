interface ITag {
  size?: "sm" | "md" | "lg";
  variant?: "info" | "danger" | "done";
  className?: string;
  children: React.ReactNode;
}

const Tag: React.FC<ITag> = ({
  size = "md",
  variant = "info",
  className = "",
  children,
}) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2 py-0.5",
    lg: "text-base px-3 py-1",
  };

  const variantClasses = {
    info: "bg-blue-200",
    danger: "bg-red-200",
    done: "bg-green-200",
  };

  return (
    <span
      className={`inline-block h-fit rounded-md font-semibold text-gray-800 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
