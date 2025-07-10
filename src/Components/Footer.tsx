const quickLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Our Services", url: "/" },
  { name: "Blog", url: "/" },
  { name: "Membership Plans", url: "/" },
  { name: "Contact Us", url: "/" },
];

const socialLinks = [
  { name: "Facebook", url: "/" },
  { name: "Instagram", url: "/" },
  { name: "Twitter", url: "/" },
  { name: "Linkedin", url: "/" },
];

const supportLinks = [
  {
    name: "Help",
    url: "/",
  },
  {
    name: "Security",
    url: "/",
  },
  {
    name: "Cookies policy",
    url: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-8 pt-36 pb-5 ">
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-white">Stay in loop</h2>
            <p className="text-base text-white">
              Be the first to get updates on our latest content, special offers,
              and new features.
            </p>
            <p className="text-xs text-[#A1A1A1]">
              By signing up, you’re agreeing to receive marketing emails from
              Bihebari. You can unsubscribe at any time.{" "}
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex justify-between items-center">
              <input
                className="border border-white text-lg text-white px-8 py-3 placeholder:text-white"
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="text-white py-2 px-8  text-sm  border border-white ">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-32  mt-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-base font-semibold">Quick links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks?.map((link) => (
                <li className="cursor-pointer text-sm text-[#B8B8B8]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-base font-semibold">Social media</h3>
            <ul className="flex flex-col gap-3">
              {socialLinks?.map((link) => (
                <li className=" cursor-pointer text-sm text-[#B8B8B8]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-base font-semibold">Support</h3>
            <ul className="flex flex-col gap-3">
              {supportLinks?.map((link) => (
                <li className="cursor-pointer text-sm text-[#B8B8B8]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center  mt-20">
          <p className="text-center text-sm text-[#B8B8B8]">
            Copyright © 2025 Bihebari. All rights reserved.
          </p>
          <p className="text-center text-sm text-[#B8B8B8]">
            Designed with ❤️ by Nischal Pokharel & Aashish Ghimire
          </p>
          <div>
            <a className="text-center text-sm text-[#B8B8B8]">
              Terms & Conditions
            </a>
            <a className="text-center text-sm text-[#B8B8B8]">Privacy Policy</a>
            <a className="text-center text-sm text-[#B8B8B8]">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
