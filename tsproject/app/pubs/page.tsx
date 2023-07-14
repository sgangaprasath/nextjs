import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";

export interface PubsMetaData {
  id: number;
  name: string;
  title: string;
  twitter: string;
  email: string;
  webpage: string;
  cv: string;
  image: string;
}

const getMemContent = (): PubsMetaData[] => {
  const jsonString = fs.readFileSync("./app/json/members.json", "utf-8");
  const jsonData = JSON.parse(jsonString);
  jsonData.sort(function (a: PubsMetaData, b: PubsMetaData) {
    return a.id - b.id;
  });
  return jsonData;
};

const MemPreview = (props: PubsMetaData) => {
  return (
    <div className="container flex flex-row items-center justify-center gap-4">
      <Image
        src={props.image}
        width={45}
        height={45}
        alt="Picture of the lab member"
        className="transform duration-200 rounded-full grayscale hover:grayscale-0 hover:scale-125"
      />
      <div className="flex flex-col items-start justify-center">
        <p className="text-center md:text-left font-semibold text-md">
          {props.name}
        </p>
        <p className="text-center md:text-left font-light text-xs text-gray-500 pb-1">
          {props.title}
        </p>
        <div className="flex flex-row items-start justify-center gap-2">
          {props.twitter !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </Link>
          )}
          <Link
            className="opacity-50 hover:opacity-100"
            href={props.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/email.svg"}
              width={15}
              height={15}
              alt="Email for correspondence"
            />
          </Link>
          {props.webpage !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.webpage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/webpage.svg"}
                width={15}
                height={15}
                alt="Personal webpage"
              />
            </Link>
          )}
          {props.cv !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/cv.svg"}
                width={15}
                height={15}
                alt="Personal webpage"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getMemContent();
  return posts.map((post) => ({
    id: post.id,
  }));
};

const MembersPage = () => {
  const posts = getMemContent();
  const memPreviews = posts.map((post) => (
    <MemPreview key={post.id} {...post} />
  ));
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl">
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full mt-20 mb-10 md:ml-20 md:gap-4">
        <div className="flex flex-col md:flex-row items-center justify-start gap-2">
          <div className="p-3 bg-white dark:bg-black border border-gray-300 rounded-full opacity-60 dark:border-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <p className="font-bold text-lg px-4">Publications</p>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-10 md:gap-10 lg:gap-20 mb-10 mx-10 drop-shadow-xl text-sm md:grid-cols-3 max-w-4xl">
        {memPreviews}
      </section>
    </div>
  );
};

export default MembersPage;
