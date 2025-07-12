import { CalendarDays, Search } from "lucide-react";
import { Link } from "react-router-dom";
import NewChapter from "../Components/NewChapter";

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
    <div>
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 bg-black">
        <div className="flex items-center gap-10">
          <div className="text-white text-2xl font-bold">
            <img src="/src/assets/logo.png" alt="" />
          </div>
          <ul className="flex gap-10 text-white font-medium">
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to={"/about"} className="hover:underline cursor-pointer">
              About us
            </Link>
            <li className="hover:underline cursor-pointer">Our Services</li>
            <Link to="/blogs" className="hover:underline cursor-pointer">
              Blog
            </Link>
            <li className="hover:underline cursor-pointer">Membership Plans</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white rounded-xl py-2 px-3">
            <Search />
          </div>

          <button className="bg-white rounded-xl py-2 px-6">Login</button>
        </div>
      </nav>
      <div className="px-8 py-16">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl">Blogs</h1>
          <p className="text-sm text-center text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
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
                <Link
                  to={`/blogs/${blog.blogId}`}
                  className="block w-full bg-blue-600 rounded-lg text-white text-center py-2 my-2"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <NewChapter />
      </div>
    </div>
  );
};

export default Blogs;
