interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  authorName, title, content, publishedDate }: BlogCardProps) {
  return (
    <div className="p-4 border-b border-slate-400 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div>
          <Avatar size="small" name={authorName} />
        </div>
        <div className="font-extralight px-2">{authorName}</div>
        <div className="flex justify-center flex-col"><Circle/></div>
        <div className="pl-2 font-thin text-slate-500">{publishedDate}</div></div>
      <div className="pt-2 text-xl font-bold">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-500 text-sm font-thin pt-2">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
    </div>
  )
}

function Circle(){
  return <div className="h-1 w-1 rounded-full bg-slate-600">
  </div>
}

export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }, ) {
  return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-md" : "text-lg"} font-small text-gray-600 dark:text-gray-300`}>{name[0]}</span>
  </div>
}

export default BlogCard 