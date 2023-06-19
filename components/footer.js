import "../app/globals.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <div class="flex flex-col items-center justify-between gap-10 md:flex-row px-8">
        <a
          href="https://apm.iitm.ac.in"
          className="group opacity-50 hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`text-center text-sm md:text-left`}>
            Department of Applied Mechanics <br />
            Indian Institute of Technology Madras <br />
            Chennai, TN 600036.
          </p>
        </a>
        <a
          href="https://apm.iitm.ac.in"
          className="group opacity-50 hover:opacity-100"
        >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/iitmlogo.svg"
            alt="IIT Madras logo"
            width={80}
            height={80}
            priority
          />
        </a>
      </div>
    </footer>
  );
}
