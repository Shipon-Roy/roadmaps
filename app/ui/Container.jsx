import React from "react";

export default function Container({ children }) {
  return (
    <div className="container mx-auto w-full max-w-[1490px] px-4">
      {children}
    </div>
  );
}
