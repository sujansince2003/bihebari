import Nav from "../Components/Nav";
import NewChapter from "../Components/NewChapter";

const Membership = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Nav />

      <div className="px-4 md:px-8 py-8 md:py-12">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-2 text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Membership Plans
          </h1>
          <p className="text-sm md:text-base text-[#737373] max-w-xl">
            Choose the plan that fits your needs and start your journey to find
            your perfect match.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 mt-6 md:mt-10 overflow-x-auto pb-4 md:pb-0">
          {/* Gold Card */}
          <div
            className="rounded-xl p-6 min-w-[280px] md:w-full shadow-xl text-white flex-shrink-0 md:flex-shrink"
            style={{ background: "linear-gradient(135deg, #c59d2f, #e3aa3b)" }}
          >
            <div className="bg-white text-black rounded-full px-4 py-1 inline-block font-semibold text-sm mb-4">
              Gold
            </div>
            <h2 className="text-2xl font-semibold">Most Popular</h2>
            <p className="text-4xl font-bold mt-1 mb-6">
              Rs. 3000<span className="text-lg font-medium">/6month</span>
            </p>
            <ul className="space-y-3 md:space-y-4 text-white">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                View 40 profiles daily
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                See who viewed your profile
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Full access (without ads)
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced filters
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Video call option
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Kundali match
              </li>
            </ul>
          </div>

          {/* Premium Card */}
          <div
            className="rounded-xl p-6 min-w-[280px] md:w-full shadow-xl text-white flex-shrink-0 md:flex-shrink"
            style={{ background: "linear-gradient(135deg, #AB4FCF, #C229FF)" }}
          >
            <div className="bg-white text-black rounded-full px-4 py-1 inline-block font-semibold text-sm mb-4">
              Premium
            </div>
            <h2 className="text-2xl font-semibold">Most Popular</h2>
            <p className="text-4xl font-bold mt-1 mb-6">
              Rs. 5000<span className="text-lg font-medium">/6month</span>
            </p>
            <ul className="space-y-3 md:space-y-4 text-white">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                View 60 profiles daily
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                See who viewed your profile
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Full access (without ads)
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced filters
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Video call option
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced Kundali match
              </li>
            </ul>
          </div>

          {/* Platinum Card */}
          <div
            className="rounded-xl p-6 min-w-[280px] md:w-full shadow-xl text-white flex-shrink-0 md:flex-shrink"
            style={{ background: "linear-gradient(135deg, #003A91, #5089DF)" }}
          >
            <div className="bg-white text-black rounded-full px-4 py-1 inline-block font-semibold text-sm mb-4">
              Platinum
            </div>
            <h2 className="text-2xl font-semibold">Most Popular</h2>
            <p className="text-4xl font-bold mt-1 mb-6">
              Rs. 8000<span className="text-lg font-medium">/6month</span>
            </p>
            <ul className="space-y-3 md:space-y-4 text-white">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited profile views
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                See who viewed your profile
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Full access (without ads)
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Premium filters
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Video call option
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Premium Kundali match
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Options Section */}
        <div className="py-8 md:py-15">
          <div className="text-2xl md:text-3xl font-semibold text-center py-8 md:py-20 flex items-center justify-center gap-4">
            <hr className="w-20 md:w-32 border-gray-300" />
            Payment Options
            <hr className="w-20 md:w-32 border-gray-300" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
            {/* QR Code Payment */}
            <div className="w-full lg:w-[50%] flex flex-col items-center border border-gray-100 rounded-3xl shadow-md p-6 md:p-12 lg:p-20 gap-3">
              <h3 className="text-xl md:text-2xl text-center font-medium">
                Scan and pay with any wallet app
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Like eSewa, Khalti, etc.
              </p>
              <div className="mt-4 md:mt-6">
                <img className="w-48 md:w-64" src="/qrcode.png" alt="QR Code" />
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="w-full lg:w-[50%] flex flex-col items-center gap-3 border border-gray-100 rounded-3xl shadow-md p-6 md:p-12 lg:p-20">
              <h3 className="text-xl md:text-2xl text-center font-medium">
                Bank Transfer
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-center">
                Proceed your payment through your bank account
              </p>

              <div className="w-full flex flex-col gap-4 md:gap-6 pt-6 md:pt-14">
                <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-4">
                  <p className="text-base md:text-xl font-medium">Bank Name</p>
                  <p className="text-sm md:text-lg text-gray-700">Nabil Bank</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-4">
                  <p className="text-base md:text-xl font-medium">
                    Account Holder
                  </p>
                  <p className="text-sm md:text-lg text-gray-700">XYZ Kumar</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-4">
                  <p className="text-base md:text-xl font-medium">
                    Account Number
                  </p>
                  <p className="text-sm md:text-lg text-gray-700">823985289</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-4">
                  <p className="text-base md:text-xl font-medium">
                    Bank Branch
                  </p>
                  <p className="text-sm md:text-lg text-gray-700">
                    Butwal, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 mb-[500px] md:mb-[200px]">
        <NewChapter />
      </div>
      <div className="h-32 md:h-56 bg-black" />
      <div className="absolute md:bottom-[60px] bottom-[-60px] w-[90%] max-w-6xl left-1/2 -translate-x-1/2 bg-white border border-white rounded-3xl flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-xl ">
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
        <div className="p-0 ">
          <img
            className="w-full md:w-[680px]  object-contain"
            src="/getintouch.png"
            alt="Get in Touch"
          />
        </div>
      </div>
    </div>
  );
};

export default Membership;
