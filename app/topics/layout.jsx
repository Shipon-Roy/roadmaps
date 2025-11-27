import Link from "next/link";
import Container from "../../components/ui/Container";
import Banner from "./../../components/topics/Banner";

export default function layout({ children }) {
  return (
    <div>
      <Banner />
      <Container>
        <div className="text-white flex items-center justify-center gap-5">
          <Link href="/topics/">
            <button>All Topics </button>
          </Link>
          <Link href="/topics/framework">
            <button>Frameworks</button>
          </Link>
          <Link href="/topics/languages">
            <button>Languages</button>
          </Link>
          <Link href="/topics/tooling">
            <button>Tooling</button>
          </Link>
        </div>
      </Container>
      <div>{children}</div>
    </div>
  );
}
