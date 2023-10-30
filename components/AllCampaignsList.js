import { useEffect, useState } from "react";
import AllCampaignsCard from "@/components/ui/AllCampaignsCard";
import CampaignsLoading from "../components/ui/CampaignsLoading";
import CampaignsLoadingError from "../components/ui/CampaignsLoadingError";

export default function AllCampaignsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://helpukrainehub-cd14b.web.app/api/v1/test-data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const campaignsArray = Object.values(data.campaign);
        setCampaigns(campaignsArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <CampaignsLoading />;
  }
  if (campaigns.length === 0) {
    return <CampaignsLoadingError />;
  }

  const showCampaigns = () => {
    return campaigns.map((campaign) => (
      <AllCampaignsCard
        key={campaign.name}
        name={campaign.name}
        description={campaign.description}
        image={campaign.image}
        link={campaign.link}
        logoBackground={campaign.logoBackground}
      />
    ));
  };

  return <>{showCampaigns()}</>;
}
