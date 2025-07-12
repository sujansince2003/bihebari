const NewChapter = () => {
  return (
    <div className="bg-[#0248ACB2] py-10 px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-center md:text-left">
      <h1 className="text-xl md:text-3xl text-white md:max-w-full max-w-md">
        Your new chapter is just a click away.
      </h1>
      <button className="border font-normal py-3 px-6 rounded-md border-amber-50 text-white hover:bg-white hover:text-[#0248AC] transition">
        Get Started
      </button>
    </div>
  );
};

export default NewChapter;
