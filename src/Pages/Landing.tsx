import { Hero } from "../Components";
import Banner from "../Components/Banner";
import HowItworks from "../Components/HowItworks";
import OurHistory from "../Components/OurHistory";

const Landing = () => {
  return (
    <div>
      <Hero />
      <OurHistory />
      <Banner />
      <HowItworks />
    </div>
  );
};

export default Landing;
