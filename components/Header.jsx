"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HiOutlineDocumentText,
  HiOutlineInformationCircle,
  HiOutlineMap,
  HiOutlineMenu,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineX,
} from "react-icons/hi";
import Container from "./ui/Container";
import ThemeToggle from "./ui/ThemeToggle";

const navItems = [
  { href: "/topics", label: "Topics", Icon: HiOutlineMap },
  { href: "/posts", label: "Posts", Icon: HiOutlineDocumentText },
  { href: "/blogs", label: "Blogs", Icon: HiOutlineNewspaper },
  { href: "/podcast", label: "Podcast", Icon: HiOutlineMicrophone },
  { href: "/about", label: "About", Icon: HiOutlineInformationCircle },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Route বদলালে মোবাইল মেনু বন্ধ হবে
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // স্ক্রল করলে header বেশি solid হবে
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-30 w-full border-b transition-all duration-300 ${
        scrolled
          ? "glass shadow-sm"
          : "border-transparent bg-background/60 backdrop-blur"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: brand + desktop nav */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 shadow-glow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Road<span className="gradient-text">Maps</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden text-sm font-medium lg:block">
              <ul className="flex items-center gap-4">
                {navItems.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive(href) ? "page" : undefined}
                      className={`flex items-center gap-1.5 transition-colors duration-200 ${
                        isActive(href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/blogs"
              className="hidden h-8 items-center justify-center rounded-sm bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80 sm:inline-flex"
            >
              Read Blogs
            </Link>
            <Link
              href="/topics"
              className="inline-flex h-8 items-center justify-center rounded-sm bg-blue-600 px-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Start Learning
            </Link>

            <ThemeToggle />

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-haspopup="dialog"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-sm text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground lg:hidden"
            >
              {open ? (
                <HiOutlineX className="h-5 w-5" />
              ) : (
                <HiOutlineMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer (Radix Sheet-এর সরল সংস্করণ) */}
      <div
        role="dialog"
        aria-label="Main menu"
        className={`glass overflow-hidden border-t border-border transition-all duration-300 ease-out lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav className="py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-sm px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive(href)
                        ? "bg-accent text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              <Link
                href="/blogs"
                onClick={() => setOpen(false)}
                className="flex h-9 flex-1 items-center justify-center rounded-sm bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                Read Blogs
              </Link>
              <Link
                href="/topics"
                onClick={() => setOpen(false)}
                className="flex h-9 flex-1 items-center justify-center rounded-sm bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Start Learning
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
