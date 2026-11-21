"use client";
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

/**
 * Light/Dark theme switcher.
 *
 * কীভাবে কাজ করে:
 * - <html> এ "dark" class থাকে (layout.js)। toggle করলে সেই class যোগ/মুছে যায়।
 * - পছন্দ localStorage-এ সংরক্ষিত হয়।
 * - Layout-এ suppressHydrationWarning আছে, তাই SSR/CSR mismatch হয় না।
 * - শুধু mount হওয়ার পর read করা হয়, তাই hydration error নেই।
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      title={dark ? "Light mode" : "Dark mode"}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-sm text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-foreground"
    >
      {dark ? (
        <HiOutlineSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
