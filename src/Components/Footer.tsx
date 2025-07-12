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
    <div className="bg-black text-white">
      <div className="px-4 md:px-8 pt-20 pb-10">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Stay in loop</h2>
            <p className="text-base">
              Be the first to get updates on our latest content, special offers,
              and new features.
            </p>
            <p className="text-xs text-[#A1A1A1]">
              By signing up, you’re agreeing to receive marketing emails from
              Bihebari. You can unsubscribe at any time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              className="border border-white bg-transparent text-white px-4 py-2 placeholder:text-white w-full sm:w-auto"
              placeholder="Enter your email"
              type="text"
            />
            <button className="text-white py-2 px-6 text-sm border border-white whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 px-4 md:px-32">
          <div>
            <h3 className="text-base font-semibold mb-4">Quick links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-sm text-[#B8B8B8]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Social media</h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link, index) => (
                <li key={index} className="text-sm text-[#B8B8B8]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Support</h3>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link, index) => (
                <li key={index} className="text-sm text-[#B8B8B8]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-[#B8B8B8] text-sm gap-4">
          <p className="text-center">© 2025 Bihebari. All rights reserved.</p>
          <p className="text-center">
            Designed with ❤️ by Nischal Pokharel & Aashish Ghimire
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
