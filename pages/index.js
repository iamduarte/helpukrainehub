import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import Footer from "@/components/Footer";
import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <FeaturedCampaigns />
      <Footer />
    </>
  );
}
