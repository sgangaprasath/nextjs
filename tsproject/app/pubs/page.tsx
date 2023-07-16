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

const List = ({ skills }) => (
  <ul>
    {skills.map((skill, i) => (
      <Skill key={i} skill={skill} />
    ))}
  </ul>
);

const Skill = ({ skill }) => (
  <li>
    <p>Type: {skill.year}</p>
    <ul>
      {skill.data.map((innerSkill, i) => (
        <InnerSkill key={i} innerSkill={innerSkill} />
      ))}
    </ul>
  </li>
);

const InnerSkill = ({ innerSkill }) => (
  <li>
    <p>Name: {innerSkill.title}</p>
    <p>Name: {innerSkill.authors}</p>
  </li>
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
      <List skills={posts} />
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