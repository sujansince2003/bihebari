import { Link, useParams } from "react-router-dom";
import { CalendarDays, Pen, Search } from "lucide-react";
import NewChapter from "../Components/NewChapter";

function BlogDetail() {
  const { blogId } = useParams();
  console.log(blogId); //for fetching blog details

  return (
    <div>
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 bg-black">
        <div className="flex items-center gap-10">
          <div className="text-white text-2xl font-bold">
            <img src="/src/assets/logo.png" alt="" />
          </div>
          <ul className="flex gap-10 text-white font-medium">
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to={"/about"} className="hover:underline cursor-pointer">
              About us
            </Link>
            <li className="hover:underline cursor-pointer">Our Services</li>
            <Link to="/blogs" className="hover:underline cursor-pointer">
              Blog
            </Link>
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
      <div className="px-8 py-10 flex flex-col gap-4">
        <img src="/src/assets/blog1.png" alt="" />
        <div>
          <div className="flex items-center gap-10">
            <p className="text-lg  flex items-center gap-2">
              <CalendarDays size={18} strokeWidth={3} />
              <span>20/05/2023</span>
            </p>
            <p className="text-lg  flex items-center gap-2">
              <Pen size={18} strokeWidth={3} />
              <span>Rohit Maharjan</span>
            </p>
          </div>
          <p className="text-base mt-4">
            Nepali wedding ceremonies in 2025 have evolved into a beautiful
            blend of tradition and modern lifestyle. Today’s couples are opting
            for minimalist and personalized decor themes, fusion outfits that
            mix traditional attire with western styles, and intimate weddings
            with fewer guests at scenic destinations like Pokhara or Nagarkot.
            Pre-wedding photo and video shoots, especially Instagram Reels and
            cinematic drone shots, have become a must-have. Digital wedding
            invitations and RSVP systems are replacing traditional cards, while
            food menus now include live momo stations, Newari bhoye, and
            designer desserts. Wedding planners, makeup artists, and even
            astrologers are now booked online, and matrimony apps are
            increasingly trusted by families for partner matching, including
            features like kundali matching and private chat. Overall, Nepali
            weddings are now more stylish, organized, and tech-savvy than ever
            before. Nepali wedding ceremonies in 2025 beautifully reflect the
            fusion of tradition and modern trends. While rituals like Swayambar,
            Kanyadaan, and Pani Grahan still hold cultural significance, the way
            weddings are celebrated has transformed significantly. Couples now
            prefer intimate ceremonies with close family and friends, often at
            scenic destinations like Pokhara, Bandipur, or Nagarkot. The rise of
            micro weddings has not only made events more meaningful but also
            allowed families to invest in quality over quantity — from
            customized décor to personal touches in every element. Fashion and
            presentation have also taken center stage. Brides and grooms are
            experimenting with fusion outfits, combining traditional lehenga or
            Daura Suruwal with modern elements like sneakers, pastel tones, and
            coordinated couple looks. Pre-wedding photoshoots and cinematic
            reels are now an essential part of the celebration, with social
            media playing a big role in sharing memories. Digital wedding
            invitations, QR code-based RSVPs, and event calendars are replacing
            printed cards, making the whole experience eco-friendly and
            tech-forward. Perhaps the most notable trend is the role of
            technology in matchmaking and planning. Matrimony apps have gained
            popularity among the younger generation, offering kundali matching,
            private chats, and verified profiles, making it easier for families
            to find suitable matches online. Wedding planning services, makeup
            artists, and photographers are also being hired through online
            platforms. From live food counters and mocktail bars to drone
            coverage and personalized gifts, Nepali weddings have become more
            curated, stylish, and efficient — while still preserving the essence
            of cultural traditions.
          </p>
        </div>
      </div>
      <div className="my-10">
        <NewChapter />
      </div>
    </div>
  );
}

export default BlogDetail;
