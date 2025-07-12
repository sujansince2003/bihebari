import { CircleCheckBig } from "lucide-react";

const HowItworks = () => {
  return (
    <div className="px-4 md:px-8 py-24 md:py-36">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-3xl md:text-5xl font-medium">How it works</h1>
        <p className="text-sm text-[#737373]">EXPLORE NEW PROFILES</p>
      </div>

      {/* Steps */}
      <div className=" hidden md:flex items-center pt-16 justify-between">
        <div className="w-xs flex flex-col items-center gap-4   ">
          <div className=" relative border-1 border-[#FBB53C] rounded-full inline-block">
            <img
              className="h-64 w-64 p-1"
              src="/src/assets/image.png "
              alt=""
            />
            <p className=" absolute top-0 left-10 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
              1
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl">Create an account</p>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod te
            </p>
          </div>
        </div>
        <div>
          <img className="w-23" src="/src/assets/worksarrow.png" alt="" />
        </div>
        <div className="w-xs flex flex-col items-center gap-4   ">
          <div className=" relative border-1 border-[#FBB53C] rounded-full inline-block">
            <img
              className="h-64 w-64 p-1"
              src="/src/assets/image.png "
              alt=""
            />
            <p className=" absolute top-0 left-10 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
              2
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl">Browse profiles</p>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod te
            </p>
          </div>
        </div>
        <div>
          <img className="w-23" src="/src/assets/worksarrow.png" alt="" />
        </div>
        <div className="w-xs flex flex-col items-center gap-4   ">
          <div className=" relative border-1 border-[#FBB53C] rounded-full inline-block">
            <img
              className="h-64 w-64 p-1"
              src="/src/assets/image.png "
              alt=""
            />
            <p className=" absolute top-0 left-10 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
              3
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl">Connect</p>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod te
            </p>
          </div>
        </div>
      </div>
      <div className=" md:hidden flex flex-col lg:flex-row items-center justify-center gap-12 pt-16">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center gap-4 max-w-xs">
            <div className="relative border border-[#FBB53C] rounded-full inline-block">
              <img
                className="h-48 w-48 md:h-64 md:w-64 p-1 object-cover"
                src="/src/assets/image.png"
                alt=""
              />
              <p className="absolute top-0 left-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-sm md:text-base">
                {step}
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <p className="text-xl md:text-2xl font-semibold">
                {step === 1
                  ? "Create an account"
                  : step === 2
                  ? "Browse profiles"
                  : "Connect"}
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod te
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center">
        <hr className="my-20 w-full border-[#DDDDDD]" />
      </div>

      {/* Call to Action */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-black px-6 md:px-12 py-10 rounded-[30px] md:rounded-[50px] gap-10">
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start">
          <div>
            <h1 className="font-dancingScript text-4xl md:text-5xl text-white">
              Bihebari
            </h1>
            <p className="text-base text-[#C2C2C2]">Find someone for life</p>
          </div>
          <ul className="flex flex-col gap-3">
            {[
              "Search for Brides/Grooms by custom filters",
              "Highlight Your Profile",
              "Matchmaking Expert Support",
              "Chat & Call Support and many more...",
            ].map((text, idx) => (
              <li
                key={idx}
                className="text-white flex items-center gap-2 text-sm md:text-base"
              >
                <CircleCheckBig color="white" size={20} />
                {text}
              </li>
            ))}
          </ul>
          <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
            <img
              className="w-[130px] md:w-[150px]"
              src="/src/assets/googleplay.png"
              alt="Google Play"
            />
            <img
              className="w-[130px] md:w-[150px]"
              src="/src/assets/appstore.png"
              alt="App Store"
            />
          </div>
        </div>

        <div>
          <img
            className="h-[280px] md:h-[360px] object-contain"
            src="/src/assets/mobileapp.png"
            alt="Mobile App"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItworks;
