import * as fs from "fs";
import Link from "next/link";
import Image from "next/image";

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

const List = ({ jsonFull }) => (
  <ul>
    {jsonFull.map((jsonFull, i) => (
      <JSONFull key={i} jsonLst={jsonFull} />
    ))}
  </ul>
);

const JSONFull = ({ jsonLst }) => (
  <li>
    <p>Type: {jsonLst.year}</p>
    <ul>
      {jsonLst.data.map((data, i) => (
        <DataLst key={i} data={data} />
      ))}
    </ul>
  </li>
);

const DataLst = ({data}) => (
  <div>
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
      <div className="my-2 px-2 w-2 h-2 bg-emerald-500 rounded-full"></div>
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
      {/* <div className="flex flex-row items-start justify-center gap-2">
          {props.image !== "" && (
            <Link
              className="opacity-50 hover:opacity-100"
              href={props.image}
              target="_blank"
              rel="noopener noreferrer"
            ></Link>
          )}
        </div> */}
    </div>
  </div>

  // <li>
  //   <p>Name: {data.title}</p>
  //   <p>Name: {data.authors}</p>
  // </li>
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
      <section className="grid grid-cols-1 gap-10 md:gap-10 lg:gap-20 mb-10 px-10 lg:px-14 drop-shadow-xl text-sm max-w-4xl">
        <List jsonFull={posts} />
        {/* {pubData} */}
      </section>
      <div className="border border-sky-300 bg-sky-200 max-w-2xl text-sky-600 p-4 rounded-xl text-xs">
        We are currently looking for MS and PhD students interested in exploring
        problems in the field of soft-robotics, reinforcement learning, animal
        behaviour and control of large degree of freedom systems. Our group is
        interested in problem solving either through experiments or through
        theoretical analysis as demanded by the question at hand. Have a look at
        the research tab for a broad overview and drop by our lab to know more.
      </div>
    </div>
  );
};

export default PubsPage;
