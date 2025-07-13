import { useParams } from "react-router-dom";
import { CalendarDays, Pen } from "lucide-react";
import NewChapter from "../Components/NewChapter";

import Nav from "../Components/Nav";

function BlogDetail() {
  const { blogId } = useParams();

  console.log(blogId); //for fetching blog details

  return (
    <div className="min-h-screen relative">
      <Nav />
      {/* Blog Content */}
      <div className="px-4 md:px-8 py-6 md:py-10 flex flex-col gap-4">
        <img src="/blog1.png" alt="Blog" className="w-full h-auto rounded-lg" />

        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <p className="text-base md:text-lg flex items-center gap-2">
              <CalendarDays size={18} strokeWidth={3} />
              <span>20/05/2023</span>
            </p>
            <p className="text-base md:text-lg flex items-center gap-2">
              <Pen size={18} strokeWidth={3} />
              <span>Rohit Maharjan</span>
            </p>
          </div>

          <p className="text-sm md:text-base mt-4 leading-relaxed">
            Nepali wedding ceremonies in 2025 have evolved into a beautiful
            blend of tradition and modern lifestyle. Today's couples are opting
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

      <div className="my-10 mb-[500px] md:mb-[200px]">
        <NewChapter />
      </div>
      <div className="h-32 md:h-56 bg-black" />
      <div className="absolute md:bottom-[60px] bottom-[-60px] w-[90%] max-w-6xl left-1/2 -translate-x-1/2 bg-white border border-white rounded-3xl flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-xl">
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
        <div className="p-4">
          <img
            className="w-[200px] md:w-[300px] object-contain"
            src="/getintouch.png"
            alt="Get in Touch"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
