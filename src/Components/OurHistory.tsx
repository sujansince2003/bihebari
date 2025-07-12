const OurHistory = () => {
  return (
    <div className="px-4 md:px-8 py-24 md:py-52 flex flex-col items-center gap-6 text-center">
      {/* Heading Section */}
      <div>
        <h2 className="text-sm md:text-md text-gray-500">About us</h2>
        <h3 className="text-3xl md:text-5xl font-semibold">Our History</h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-700 max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      {/* Button */}
      <button className="bg-[#0066FF] text-white px-6 py-3 rounded-2xl font-medium text-base md:text-[22px]">
        Read more
      </button>
    </div>
  );
};

export default OurHistory;
