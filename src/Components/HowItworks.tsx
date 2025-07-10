import { CircleCheckBig } from "lucide-react";
const HowItworks = () => {
  return (
    <div className="px-8 py-36 ">
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="text-5xl font-medium">How it works</h1>
        <p className="text-sm text-[#737373]">EXPLORE NEW PROFILES</p>
      </div>
      <div className="flex items-center pt-16 justify-between">
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

      <div className="flex items-center justify-center">
        <hr className="m-32 w-[90%] border-[#DDDDDD]" />
      </div>
      <div className="bg-black flex justify-between px-16 py-10   rounded-[50px]">
        <div className="pt-10 flex flex-col gap-6">
          <div>
            <h1 className="font-dancingScript text-5xl text-white">Bihebari</h1>
            <p className=" text-base text-[#C2C2C2]">Find someone for life</p>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-white flex items-center gap-2 text-base">
              <CircleCheckBig color="white" size={24} />
              Search for Brides/Grooms by custom filters
            </li>
            <li className="text-white flex items-center gap-2 text-base">
              <CircleCheckBig color="white" size={24} />
              Highlight Your Profile
            </li>
            <li className="text-white flex items-center gap-2 text-base">
              <CircleCheckBig color="white" size={24} />
              Matchmaking Expert Support
            </li>
            <li className="text-white flex items-center gap-2 text-base">
              <CircleCheckBig color="white" size={24} />
              Chat & Call Support and many more...
            </li>
          </ul>
          <div className="flex gap-8 ">
            <img
              className="w-[150px]"
              src="/src/assets/googleplay.png"
              alt=""
            />
            <img className="w-[150px]" src="/src/assets/appstore.png" alt="" />
          </div>
        </div>
        <div>
          <img className="h-[360px]" src="/src/assets/mobileapp.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItworks;
