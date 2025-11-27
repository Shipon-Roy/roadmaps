import Link from "next/link";
import Container from "../../../components/ui/Container";
import { topics } from "../../../public/classes";

export default function layout({ children }) {
  return (
    <Container>
      <div className="flex gap-5 my-20">
        <div> {children}</div>
        <div className="w-full lg:w-[30%] max-h-[500px] overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 mt-10">
          <h3 className="text-gray-100">All Topics</h3>
          {topics.map((e, index) => (
            <Link key={index} href={`/topics${e.link}`}>
              <div className=" bg-slate-700 text-white p-5 w-[200px] h-[60px] flex items-center gap-4 rounded-md hover:bg-slate-600">
                <span className="text-xl">{e.icon}</span>
                <h1 className="text-md">{e.topic}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
