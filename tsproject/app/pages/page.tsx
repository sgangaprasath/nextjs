import * as fs from "fs";

export interface NewsMetaData {
  id: number;
  title: string;
  message: string;
  link: string;
  date: string;
  tag: string;
}

const getNewsContent = (): NewsMetaData[] => {
  const jsonString = fs.readFileSync("./app/json/data.json", "utf-8");
  const jsonData = JSON.parse(jsonString);
  return jsonData;
};

const NewsPreview = (props: NewsMetaData) => {
  return (
    <a
      href={props.link}
      className="group shadow-lg bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-neutral-600 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <div className="flex flex-row items-center justify-between mb-2">
        <p className="text-[9px] font-normal text-gray-400">{props.date}</p>
        <div className="px-2 bg-violet-200 rounded-full text-[10px] font-normal text-violet-600">
          {props.tag}
        </div>
      </div>
      <p className="font-bold text-2xl mb-1 bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
        {props.title}
      </p>
      <p className="text-sm">{props.message}</p>
    </a>
  );
};

export const generateStaticParams = async () => {
  const posts = getNewsContent();
  return posts.map((post) => ({
    id: post.id,
  }));
};

const NewsPage = () => {
  const posts = getNewsContent();
  //   posts.map(({id,name }) => console.log(id, name));
  const newsPreviews = posts.map((post) => (
    <NewsPreview key={post.id} {...post} />
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-10 max-w-5xl py-20">
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
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
              />
            </svg>
          </div>
          <p className="font-bold px-4">News</p>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 w-auto max-w-5xl mb-4">
        {newsPreviews}
      </div>
    </>
  );
};

export default NewsPage;

{
  /* <a
      href={props.link}
      className="group bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-neutral-600 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-[9px] font-normal text-gray-400">{props.date}</p>
        <div className="px-2 bg-violet-200 rounded-full text-[10px] font-normal text-violet-600">
        {props.tag}
        </div>
      </div>
      <p className="font-bold text-2xl bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
      {props.title}
      </p>
      <p>
       {props.message}
      </p>
    </a> */
}
