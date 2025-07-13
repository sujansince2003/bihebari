import Nav from "../Components/Nav";

const Contactus = () => {
  return (
    <div>
      <Nav />
      <div className="px-8 py-32 mb-32 max-w-full">
        {/* On small screens, flex-col stacks items. On medium and up, it's a row. */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 items-center md:items-start">
          <div className="relative  md:block">
            <img className="opacity-[65%] " src="/contactusimg.png" alt="" />
            <img
              className="absolute top-5 left-5"
              src="/contactusimg.png"
              alt=""
            />
          </div>

          {/* Form section: full width on small screens, adjusts on medium and up */}
          <div className="w-full md:w-xl mt-4 flex flex-col gap-2">
            <h2 className="text-4xl text-center">Send us a message</h2>
            <p className="text-sm text-center text-[#737373]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <div className="flex flex-col gap-y-10 my-10">
              {/* Flex direction for inputs: column on small, row on medium and up */}
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <input
                  className="border border-gray-100 shadow-lg py-4 px-4 w-full md:w-xs rounded-lg"
                  type="text"
                  placeholder="Your Name:"
                />
                <input
                  className="border border-gray-100 shadow-lg py-4 px-4 w-full md:w-xs rounded-lg"
                  type="text"
                  placeholder="Address:"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <input
                  className="border border-gray-100 shadow-lg py-4 px-4 w-full md:w-xs rounded-lg"
                  type="text"
                  placeholder="Email:"
                />
                <input
                  className="border border-gray-100 shadow-lg py-4 px-4 w-full md:w-xs rounded-lg"
                  type="text"
                  placeholder="Phone Number:"
                />
              </div>
              <input
                className="border border-gray-100 shadow-lg py-4 px-4 rounded-lg w-full"
                type="text"
                placeholder="Description"
              />
              <button className="bg-[#0066FF] text-white h-10 flex items-center justify-center py-6 px-8 rounded-lg w-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-10 mb-[500px] md:mb-[200px]"></div>
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
            src="/getintouch.png"
            alt="Get in Touch"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Contactus;
