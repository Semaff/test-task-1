import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "default" | "transparent";
}

const Button = ({ color = "default", className = "", children, ...props }: ButtonProps) => {
  const colors = {
    default: "py-3 px-4 rounded-xl border border-slate-300 enabled:hover:bg-slate-100",
    transparent: "underline hover:no-underline",
  };

  return (
    <button
      className={`transition-colors disabled:opacity-50 ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
