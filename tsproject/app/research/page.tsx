import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";

const ResearchPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-10 max-w-5xl pt-20 pb-10">
        <h1 className="flex flex-row items-center justify-center p-2 text-4xl">
          <div className="opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
              />
            </svg>
          </div>
          <p className="font-bold px-4">Research</p>
        </h1>
      </div>
      <section className="grid grid-cols-1 gap-4 mb-10 max-w-5xl drop-shadow-xl text-sm md:grid-cols-3">
        {/* First topic */}
        <div className="group flex flex-col items-start justify-start w-full h-auto bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-neutral-600 transition-colors">
          <Image
            src="/images/geometric.jpg"
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover rounded-tl-lg rounded-tr-lg w-full h-40"
          />
          <div className="px-5 py-4">
            <p className="px-2 bg-amber-200 w-fit rounded-full text-[10px] font-normal text-amber-600">
              Materials
            </p>
            <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              Soft mechanics
            </h2>
            <p className="text-slate-700 my-1 text-justify">
                Materials that can undergo large deformation under small amplitude of force are often termed soft. Soft materials are all around us, starting with
                biological materials such as skin, hair to macroscopic materials such as sheet of paper, fabric and polymers. The mechanical response of these
                materials is in general non-linear even when the strains are small. The primary reason for such a behaviour is the coupling between the geometry
                and the elastic properties of the material. We are interested in both understanding the behaviour as well as controlling the response of such
                materials.
            </p>
          </div>
        </div>
        {/* Second topic */}
        <div className="group flex flex-col items-start justify-start w-full h-auto bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-neutral-600 transition-colors">
          <Image
            src="/images/geometric.jpg"
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover rounded-tl-lg rounded-tr-lg w-full h-40"
          />
          <div className="px-5 py-4">
            <p className="px-2 bg-amber-200 w-fit rounded-full text-[10px] font-normal text-amber-600">
              Robotics
            </p>
            <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              Robotics & Control
            </h2>
            <p className="text-slate-700 my-1">Mechanics of materials</p>
          </div>
        </div>
        {/* Third topic */}
        <div className="group flex flex-col items-start justify-start w-full h-auto bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-neutral-600 transition-colors">
          <Image
            src="/images/geometric.jpg"
            width="0"
            height="0"
            alt="News blurb image"
            sizes="100vw"
            className="object-cover rounded-tl-lg rounded-tr-lg w-full h-40"
          />
          <div className="px-5 py-4">
            <p className="px-2 bg-amber-200 w-fit rounded-full text-[10px] font-normal text-amber-600">
              Behaviour
            </p>
            <h2 className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              Animal Behaviour
            </h2>
            <p className="text-slate-700 my-1">Mechanics of materials</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;
