import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import NewChapter from "../Components/NewChapter";
import Nav from "../Components/Nav";

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
    <div className="relative">
      {/* Navbar */}
      <Nav />

      {/* Blog Header */}
      <div className="px-4 md:px-8 py-12 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Blogs</h1>
          <p className="text-sm md:text-base text-[#737373] max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center">
          {BlogsData.map((blog) => (
            <div
              key={blog.blogId}
              className="w-full max-w-xs md:max-w-[400px] shadow-xl rounded-lg overflow-hidden bg-white"
            >
              <img
                className="w-full h-48 object-cover"
                src={blog.image}
                alt={blog.title}
              />
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
                  className="block w-full bg-blue-600 rounded-lg text-white text-center py-2 mt-3"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Chapter Component */}
      <div className="my-10 mb-[500px] md:mb-[200px]">
        <NewChapter />
      </div>
      <div className="h-32 md:h-56 bg-black" />
      <div className="absolute md:bottom-[60px] bottom-[-60px] w-[90%] max-w-6xl left-1/2 -translate-x-1/2 bg-white border border-white rounded-3xl flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-xl">
        <div className="p-6 md:p-10 flex flex-col gap-4 text-center md:text-left">
          <h4 className="text-2xl md:text-3xl font-semibold">Get in touch</h4>
          <p className="text-sm md:text-base text-gray-700">
            Feel free to reach out to us with any inquiries, questions, or to
            schedule a consultation. We understand that your wedding day is a
            once-in-a-lifetime event, and we are committed to ensuring it is
            magical.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-2xl">Best Wishes...</p>
            <h2 className="font-dancingScript text-4xl md:text-5xl">
              <span className="text-blue-500">Bihe</span>
              <span className="text-red-500">bari</span>
            </h2>
          </div>
        </div>
        <div className="p-4">
          <img
            className="w-[200px] md:w-[300px] object-contain"
            src="/src/assets/getintouch.png"
            alt="Get in Touch"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
