import { ReactNode } from "react";

type ColorVariant = "primary" | "secondary" | "white" | "link";
type SizeVariant = "sm" | "md" | "lg";

interface IButtonProps {
  color: ColorVariant;
  size: SizeVariant;
  children: string | number | ReactNode;
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: "px-3 h-6 md:h-8 md:py-1 rounded-sm text-sm md:text-sm",
  md: "px-5 h-8 md:h-10 md:py-2 rounded-md text-sm md:text-base",
  lg: "px-6 h-10 md:h-14 md:py-3 rounded-md text-base md:text-lg",
};

const colors = {
  primary: "bg-brand-500 hover:bg-brand-600 text-white",
  secondary: "bg-brand-100 hover:bg-gray-100 text-white",
  white: "bg-white border border-brand-500 hover:bg-gray-200 text-brand-500",
  link: "bg-transparent hover:text-white focus:text-white",
};

export const Button = ({ color, size, children, onClick, className }: IButtonProps) => {
  let colorClasses = colors[color];
  let sizeClasses = sizes[size];

  return (
    <button type="button" onClick={onClick} className={`font-bold font-satoshi ${sizeClasses} ${colorClasses} ${className}`}>
      {children}
    </button>
  );
};
