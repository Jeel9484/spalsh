import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md";
}

const variantClasses = {
  primary:
    "bg-black text-white hover:bg-gray-800",
   secondary: 
      "bg-yellow-400 w-fit text-white text-sm rounded-full font-semibold flex items-center"
};

 


const sizeClasses = {
  xs: "h-10 px-3.5 py-[13px] gap-2.5",

  sm: "h-[38px] px-3.5 py-3",

  md: "px-4 py-1 gap-2"
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "xs",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={`
        inline-flex items-center rounded-xl focus:outline-none transition-all
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
