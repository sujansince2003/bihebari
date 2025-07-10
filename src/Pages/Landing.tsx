import { Hero } from "../Components";
import Banner from "../Components/Banner";
import HowItworks from "../Components/HowItworks";
import OurHistory from "../Components/OurHistory";
import OurServices from "../Components/OurServices";

const Landing = () => {
  return (
    <div>
      <Hero />
      <OurHistory />
      <Banner />
      <HowItworks />
      <OurServices />
    </div>
  );
};

export default Landing;
