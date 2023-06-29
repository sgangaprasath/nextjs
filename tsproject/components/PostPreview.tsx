import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/blog/${props.slug}`} className="group bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-neutral-600 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      
      <div className="flex flex-row items-center justify-between">
          <p className="text-[9px] font-normal text-gray-400">{props.date}</p>
          <div className="px-2 bg-sky-200 rounded-full text-[10px] font-normal text-sky-600">
            {props.category}
          </div>
        </div>
        <h2 className="font-bold text-2xl bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">{props.title}</h2>
      <p className="text-slate-700">{props.subtitle}</p>
    </Link>
  );
};

export default PostPreview;