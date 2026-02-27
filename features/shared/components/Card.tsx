import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
}