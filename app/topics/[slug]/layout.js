import Link from "next/link";
import Container from "../../../components/ui/Container";
import { topics } from "../../../public/classes";

export default function layout({ children }) {
  return (
    <Container>
      <div className="my-20 flex flex-col gap-8 lg:flex-row">
        <div className="min-w-0 flex-1"> {children}</div>
        <aside className="w-full lg:w-[30%]" aria-label="All topics">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            All Topics
          </h3>
          <div className="grid max-h-[500px] grid-cols-2 gap-3 overflow-y-auto pr-2 md:grid-cols-3 lg:grid-cols-1">
            {topics.map((e, index) => (
              <Link key={index} href={`/topics${e.link}`}>
                <div className="flex h-[60px] w-full items-center gap-3 rounded-sm border border-border bg-card/60 px-4 transition-colors duration-200 hover:border-primary/40 hover:bg-accent">
                  <span className="text-xl">{e.icon}</span>
                  <h1 className="truncate text-sm font-medium">{e.topic}</h1>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </Container>
  );
}
