import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Container from "./ui/Container";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/topics", label: "Topics" },
      { href: "/posts", label: "Posts" },
      { href: "/blogs", label: "Blogs" },
      { href: "/podcast", label: "Podcast" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/classes/html/w3", label: "Classes" },
      { href: "/topics/framework", label: "Frameworks" },
      { href: "/topics/languages", label: "Languages" },
      { href: "/topics/tooling", label: "Tooling" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about", label: "Contact" },
      { href: "/", label: "Home" },
    ],
  },
];

const socials = [
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebook },
  { href: "https://twitter.com", label: "X", Icon: FaTwitter },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://github.com", label: "GitHub", Icon: FaGithub },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        {/* Main footer */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center gap-2.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 shadow-glow-sm">
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

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Free, structured learning paths that take you from your first
              line of code to a job-ready developer.
            </p>

            {/* Social */}
            <div className="mt-6" aria-label="Social media links">
              <p className="mb-3 text-sm font-medium">Follow Us</p>
              <div className="flex gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={`${col.title} links`}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-label={`Navigate to ${link.label}`}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Shipon Roy. All rights reserved.
          </p>
          <p>Built with Next.js + Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
