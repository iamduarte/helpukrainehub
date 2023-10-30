import { useEffect, useState } from "react";
import Link from "next/link";

import bgimage from "@/assets/images/background1.jpeg";
import FeaturedCampaignsCard from "./ui/FeaturedCampaignsCard";
import CampaignsLoading from "./ui/CampaignsLoading";
import CampaignsLoadingError from "./ui/CampaignsLoadingError";

export default function FeaturedCampaigns() {
  const [featuredCampaigns, setFeaturedCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://helpukrainehub-cd14b.web.app/api/v1/test-data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const campaignsArray = Object.values(data.campaign);
        const featuredArray = campaignsArray.filter(
          (campaign) => campaign.featured === true
        );
        setFeaturedCampaigns(featuredArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <CampaignsLoading />;
  }
  if (featuredCampaigns.length === 0) {
    return <CampaignsLoadingError />;
  }

  const showFeatured = () => {
    return featuredCampaigns.map((campaign) => (
      <FeaturedCampaignsCard
        key={campaign.name}
        name={campaign.name}
        description={campaign.description}
        image={campaign.image}
        link={campaign.link}
        logoBackground={campaign.logoBackground}
      />
    ));
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundAttachment: "fixed",
      }}
      id="featured"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col">
        {/* <div className="  text-center"> */}
        <h1 className=" text-yellow-300 text-2xl md:text-5xl font-bold mt-20 text-center">
          Featured Campaigns
        </h1>
        <div
          className=" gap-5 md:flex"
          // style={{
          //   textAlign: "-webkit-center",
          // }}
          /* NEED TO FIND ALTERNATIVE FOR -webkit-center */
        >
          {showFeatured()}
        </div>
        <Link
          href="/campaigns/"
          className="btn bg-blue-700 border-none text-yellow-300 mt-10 mb-20"
        >
          Find More Campaigns
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
}
