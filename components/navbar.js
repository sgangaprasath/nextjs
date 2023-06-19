import "../app/globals.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container mx-28 mb-10 pb-6 pt-8 max-w-6xl backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <ul className="relative flex flex-col items-center justify-center gap-10 px-24 font-mono font-thin text-sm md:flex-row md:justify-end">
        <li className="linkStyle">
          <Link href={"/"}>home</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/"}>members</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/"}>publications</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/"}>gallery</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/"}>contact</Link>
        </li>
      </ul>
    </div>
  );
}
