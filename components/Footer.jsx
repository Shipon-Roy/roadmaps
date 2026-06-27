import Link from "next/link";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-12">
      <Container>
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              RoadMaps
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Free learning paths for developers
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            {[
              { href: "/topics", label: "Topics" },
              { href: "/blogs", label: "Blogs" },
              { href: "/podcast", label: "Podcast" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-sky-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shipon Roy
          </p>
        </div>
      </Container>
    </footer>
  );
}
