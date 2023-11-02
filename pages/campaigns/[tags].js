import NavbarSec from "@/components/ui/NavbarSec";
import Footer from "@/components/Footer";
import bgimage from "@/assets/images/background1.jpeg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllCampaignsCard from "@/components/ui/AllCampaignsCard";
import FilterCampaign from "@/components/ui/FilterCampaign";

export default function FileterdCampaigns() {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  //fetch campaigns from API using query params
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaigns = async () => {
      if (!query.tags) return;

      const res = await fetch(`/api/v1/campaigns?${query.tags}`);
      const campaigns = await res.json();
      console.log("USE EFFECT");
      console.log(campaigns);
      setCampaigns(campaigns);
    };
    getCampaigns();
  }, [query]);

  return (
    <>
      <NavbarSec />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center w-screen grid mt-20">
          <FilterCampaign />
          {campaigns &&
            campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <AllCampaignsCard
                key={campaign._id}
                name={campaign.name}
                description={campaign.description}
                image={campaign.image}
                link={campaign.link}
                logoBackground={campaign.logoBackground}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
