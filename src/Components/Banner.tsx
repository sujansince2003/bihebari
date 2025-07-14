const Banner = () => {
  return (
    <div className="relative w-full h-[150px] sm:h-[300px] md:h-[350px] lg:h-[350px] overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage: "url('/bannerimg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <p className="text-white font-dancingScript text-[48px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold leading-none">
          Bihebari
        </p>
        <p className="text-white text-base sm:text-lg md:text-2xl mt-2 md:mt-4">
          Connecting Hearts with Care
        </p>
      </div>
    </div>
  );
};

export default Banner;
