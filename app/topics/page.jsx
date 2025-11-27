import Link from "next/link";
import { topics } from "../../public/classes";
import Container from "../../components/ui/Container";

export default function page() {
  return (
    <Container>
      <div className="my-20">
        <div className="grid grid-cols-5 jus gap-5">
          {topics.map((e, index) => (
            <Link key={index} href={`/topics${e.link}`}>
              <div className="flex items-center gap-7 bg-slate-700 text-white p-5 w-[230px] h-[90px] rounded-md hover:bg-slate-600">
                <span className="text-5xl">{e.icon}</span>
                <h1>{e.topic}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
