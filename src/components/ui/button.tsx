import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ leftIcon, rightIcon, children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:bg-gray-800 focus:outline-none transition-all ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
