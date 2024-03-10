import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h2>Hello</h2>
      <Link href="/submit">Submit</Link>
    </>
  );
}
