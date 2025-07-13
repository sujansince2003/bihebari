const Banner = () => {
  return (
    <div
      className="relative w-full py-22  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bannerimg.png')",
      }}
    >
      <div className="flex flex-col items-center px-4 text-center">
        <p className="text-white font-dancingScript text-[48px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold leading-none">
          Bihebari
        </p>
        <p className="text-white text-base sm:text-lg md:text-2xl mt-2">
          Connecting Hearts with Care
        </p>
      </div>
    </div>
  );
};

export default Banner;
