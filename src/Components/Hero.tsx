import {
  Search,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ShieldCheck,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";
const Hero = () => {
  return (
    <div
      className="relative  w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/pdH3XhJ3/image.png')",
      }}
    >
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-10">
          <div className="text-white text-2xl font-bold">
            <img src="/src/assets/logo.png" alt="" />
          </div>
          <ul className="flex gap-10 text-white font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Our Services</li>
            <li className="hover:underline cursor-pointer">Blog</li>
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

      {/* Hero Content */}
      <div className="relative z-10 flex justify-between items-center px-8 ">
        <div className="flex flex-col gap-3 pt-24">
          <h2 className="font-dancingScript text-4xl font-semibold text-white">
            Love you are looking for
          </h2>
          <p className="font-dancingScript text-8xl font-semibold text-white">
            Find your perfect match
          </p>
          <p className="font-dancingScript text-8xl font-semibold text-white">
            Is it
          </p>
          <div className="flex gap-5 py-6">
            <button className="bg-white rounded-xl gap-6 flex py-3 px-12">
              Find partner
              <ChevronRight />
            </button>
            <button className="bg-transparent border border-white text-white rounded-xl py-3 px-18">
              Sign UP
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center  gap-8 mr-5">
          <div className="w-[2px] h-40 bg-[#B4B4B4]"></div>
          <button className="bg-white rounded-full p-2">
            <a href="#">
              <Facebook size={20} />
            </a>
          </button>

          <button className="bg-white rounded-full p-2">
            <a href="#">
              <Linkedin size={20} />
            </a>
          </button>

          <button className="bg-white rounded-full p-2">
            <a href="#">
              <Instagram size={20} />
            </a>
          </button>

          <button className="bg-white rounded-full p-2">
            <a href="#">
              <Twitter size={20} />
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="flex gap-5 backdrop-blur-lg p-14 rounded-2xl">
          <div className="w-[300px] flex flex-col gap-3 justify-center items-center">
            <div className="bg-red-600 rounded-full p-2 inline-block">
              <ShieldCheck size={32} color="white" />
            </div>
            <div className="flex flex-col items-center ">
              <p className="font-semibold text-2xl text-white ">
                Simple & Largest
              </p>
              <p className="text-md text-[#D9D9D9] text-center">
                Increases your chances of meeting the right person.
              </p>
            </div>
          </div>
          <div className=" w-[300px] flex gap-3 flex-col justify-center items-center">
            <div className="bg-red-600  rounded-full p-2 inline-block">
              <LayoutGrid size={32} color="white" />
            </div>

            <div className="flex flex-col items-center ">
              <p className="font-semibold text-2xl text-white ">
                Fast and verified
              </p>
              <p className="text-md text-[#D9D9D9] text-center">
                100% fast, secured, verified mobile numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
