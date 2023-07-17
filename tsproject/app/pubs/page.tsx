import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";

export interface JsonLstFull {
  jsonFull: PubsMetaData;
}
export interface PubsMetaData {
  id: number;
  year: number;
  data: PubsData;
}
export interface PubsData {
  id: number;
  authors: string;
  title: string;
  arxiv: string;
  website: string;
  download: string;
  news: string;
  date: string;
  image: string;
  journal: string;
}

const getPubContent = (): PubsMetaData[] => {
  const jsonString = fs.readFileSync("./app/json/pubs.json", "utf-8");
  const jsonData = JSON.parse(jsonString);
  jsonData.sort(function (a: PubsMetaData, b: PubsMetaData) {
    return a.id - b.id;
  });
  return jsonData;
};

const List = ({jsonFull}: JsonLstFull) => (
  <ul>
    {jsonFull.map((jsonFull, i) => (
      <JSONFull key={i} jsonLst={jsonFull} />
    ))}
  </ul>
);

const JSONFull = ({jsonLst}) => (
  <div className="pb-4 max-w-4xl">
    <p className="inline-block bg-green-400 text-white font-light rounded-full px-3 py-1 my-2">{jsonLst.year}</p>
    <ul>
      {jsonLst.data.map((data, i) => (
        <DataLst key={i} data={data} />
      ))}
    </ul>
  </div>
);

const DataLst = ({data}) => (
  <div className="mx-4 py-2">
    <p>
      {data.image !== "" && (
        <Image
          src={data.image}
          width={45}
          height={45}
          alt="Publication image"
          className="transform duration-200 rounded-full grayscale hover:grayscale-0 hover:scale-125"
        />
      )}
    </p>
    <div className="grid grid-cols-10 items-start gap-2 max-w-2xl">
      <div className="my-2 px-1 md:px-2 w-2 h-2 bg-green-400 rounded-full"></div>
      <div className="col-span-9 items-start justify-center">
        {/* Title */}
        <p className="text-left md:text-left font-bold pb-1">{data.title}</p>
        {/* Authors */}
        <p className="text-left font-light pb-1">{data.authors}</p>
        {/* Journal list */}
        {data.journal !== "" && (
          <p className="text-left italic font-light pb-1">{data.journal}</p>
        )}
        {/* arXiv link */}
        <div className="flex flex-row items-start justify-start gap-1">
          {data.arxiv !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={data.arxiv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/arxiv.svg"}
                width={15}
                height={15}
                alt="URL"
              />
            </Link>
          )}
          {/* Website link */}
          {data.website !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/webpage.svg"}
                width={15}
                height={15}
                alt="URL"
              />
            </Link>
          )}
          {/* Download link */}
          {data.download !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={data.download}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/download.svg"}
                width={15}
                height={15}
                alt="URL"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export const generateStaticParams = async () => {
  const posts = getPubContent();
  return posts.map((post) => ({
    id: post.id,
  }));
};

const PubsPage = () => {
  const posts = getPubContent();
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl">
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full mt-20 mb-10">
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
      <section className="grid grid-cols-1 gap-10 md:gap-10 lg:gap-20 mb-10 px-10 lg:px-14 text-sm max-w-4xl">
        <List jsonFull={posts} />
      </section>
    </div>
  );
};

export default PubsPage;
