import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-10 max-w-5xl">
        <h1 className="flex flex-row items-center justify-center p-2 text-4xl">
          <div className="opacity-100">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
          </div>
          <p className="font-bold px-4">
            Blog
          </p>
        </h1>
        <section className="grid gap-4 drop-shadow-md text-sm md:grid-cols-3">
          <a
            href="https://github.com/sgangaprasath/Publications/raw/master/KFTutorial.pdf"
            className="group bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-neutral-600 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <p className="font-bold text-2xl bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
            Kalman filter
            </p>
            New tutorial titled "Revisiting linear filtering, the Bayesian
            paradigm & optimal state estimation" is out.
          </a>
        </section>
      </div>
    </>
  );
}
