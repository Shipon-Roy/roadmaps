"use client";
import React from "react";

export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
      {children}
    </div>
  );
}