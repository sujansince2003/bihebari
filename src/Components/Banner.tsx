const Banner = () => {
  return (
    <div
      className="relative py-[160px]  w-full  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/bJjYN6F8/bannerimg.png')",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="text-white font-dancingScript text-[150px] font-bold ">
          Bihebari
        </p>
        <p className=" text-white  text-2xl ">Connecting Hearts with Care</p>
      </div>
    </div>
  );
};

export default Banner;
