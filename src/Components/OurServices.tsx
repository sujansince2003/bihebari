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
      <div className="px-8 py-36 mb-32">
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-5xl font-medium">Our Services</h1>
          <p className="text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {ourServices.map((service) => (
            <div
              key={service.title}
              className="w-[450px] flex flex-col items-center gap-1 p-1 "
            >
              <img className="w-[400px] " src={service.image} alt="" />
              <h3 className="text-2xl">{service.title}</h3>
              <p className="text-sm px-10 text-[#737373] text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-56 bg-black"></div>
      <div className="bg-white border border-white w-[60%] flex justify-between rounded-3xl  absolute bottom-10  right-[330px]">
        <div className="p-10 flex flex-col gap-4">
          <h4 className="text-3xl">Get in touch</h4>
          <p className="text-sm">
            Feel free to reach out to us with any inquiries, questions, or to
            schedule a consultation. We understand that your wedding day is a
            once-in-a-lifetime event, and we are committed to ensuring it is
            magical
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Best Wishes...</p>
            <h2 className="font-dancingScript text-5xl">
              <span className="text-blue-500">Bihe</span>
              <span className="text-red-500">bari</span>
            </h2>
          </div>
        </div>
        <img className="w-[300px]" src="/src/assets/getintouch.png" alt="" />
      </div>
    </div>
  );
};

export default OurServices;
