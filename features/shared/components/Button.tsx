import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyle =
    "px-5 py-2 rounded-lg font-medium transition duration-300";

  const variants = {
    primary: "bg-cyan-300 text-black hover:bg-cyan-400",
    secondary: "border border-cyan-300 text-cyan-300 hover:bg-cyan-50",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}