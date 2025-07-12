import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const BlogsData = [
  {
    title: "Nepali Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
    datePublished: "21st June 2023",
    blogId: 1,
  },
  {
    title: "Nepali Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
    datePublished: "21st June 2023",
    blogId: 2,
  },
  {
    title: "Nepali Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
    datePublished: "21st June 2023",
    blogId: 3,
  },
  {
    title: "Nepali Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
    datePublished: "21st June 2023",
    blogId: 4,
  },
  {
    title: "Nepali Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
    datePublished: "21st June 2023",
    blogId: 5,
  },
  {
    title: "Nepali Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
    datePublished: "21st June 2023",
    blogId: 6,
  },
];

const Blogs = () => {
  return (
    <div className="px-8 py-36">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl">Blogs</h1>
        <p className="text-sm text-center text-[#737373]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {BlogsData.map((blog) => (
          <div
            className="w-[400px] shadow-2xl   rounded-lg overflow-hidden bg-white "
            key={blog.blogId}
          >
            <div>
              <img
                className="w-full h-auto block"
                src={blog.image}
                alt="Nepali Wedding"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2 text-gray-500 text-sm">
              <CalendarDays size={14} />
              <span>{blog.datePublished}</span>
            </div>

            <div className="px-4 pb-4">
              <h1 className="text-lg font-semibold mb-1">{blog.title}</h1>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {blog.description}
                <span className="text-blue-600 cursor-pointer">
                  ...see more
                </span>
              </p>
              <button className="w-full bg-blue-600 rounded-lg text-white py-2 my-2 ">
                <Link to={`/blog/${blog.blogId}`}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
