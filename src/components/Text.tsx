import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
function Text({ children, className }: Props) {
  return (
    <h1
      className={`bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text ${className}`}
    >
      {children}
    </h1>
  );
}

export default Text;
