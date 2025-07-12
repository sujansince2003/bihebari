import NewChapter from "./NewChapter";

const ourServices = [
  {
    title: "Matchmaking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
  },
  {
    title: "Matchmaking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
  },
  {
    title: "Matchmaking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
  },
  {
    title: "Matchmaking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
  },
  {
    title: "Matchmaking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: "/src/assets/service1.png",
  },
];

const OurServices = () => {
  return (
    <div className="relative">
      <NewChapter />

      {/* Services Section */}
      <div className="px-4 md:px-8 py-24 md:py-32 mb-[400px] md:mb-36">
        <div className="flex items-center justify-center flex-col gap-3 text-center">
          <h1 className="text-3xl md:text-5xl font-medium">Our Services</h1>
          <p className="text-sm text-[#737373] max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
          {ourServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 w-full max-w-[400px] p-4 bg-white shadow rounded-xl"
            >
              <img
                className="w-full object-cover rounded-md"
                src={service.image}
                alt={service.title}
              />
              <h3 className="text-xl md:text-2xl font-semibold text-center">
                {service.title}
              </h3>
              <p className="text-sm text-[#737373] text-center px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Black Strip */}
      <div className="h-32 md:h-56 bg-black" />

      {/* Get In Touch Section */}
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

export default OurServices;
