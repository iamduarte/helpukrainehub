import { useEffect, useState } from "react";
import NavbarSec from "@/components/ui/NavbarSec";
import Link from "next/link";
import Footer from "@/components/Footer";
import bgimage from "@/assets/images/background1.jpeg";
import AllCampaignsCard from "@/components/ui/AllCampaignsCard";
import AllCampaignsList from "@/components/AllCampaignsList";
import FilterCampaign from "@/components/ui/FilterCampaign";

export default function AllCampaigns() {
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
          <AllCampaignsList />
        </div>
      </div>

      <Footer />
    </>
  );
}
