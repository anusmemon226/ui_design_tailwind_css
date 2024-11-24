import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandLogos from "./components/BrandLogos";
import Footer from "./components/Footer";
import StatsSection from "./components/StatsSection";
import FreeTrials from "./components/FreeTrials";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <BrandLogos/>
      <StatsSection/>
      <Pricing/>
      <FreeTrials/>
      <Footer/>
    </div>
  );
}
