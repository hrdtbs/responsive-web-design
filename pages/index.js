import Link from "next/link";
import "isomorphic-fetch";
import Markdown from "../components/markdown";

const Page = ({ source }) => (
  <div>
    {/*
    Hello World.{" "}
    <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
      <a>About</a>
    </Link>
    */}
    <Markdown source={source} />
  </div>
);

Page.getInitialProps = async ({ req }) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/hrdtbs/responsive-web-design/master/README.md"
  );
  const text = await res.text();
  return { source: text };
};

export default Page;
