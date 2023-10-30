import { useEffect, useState } from "react";
import NavbarSec from "@/components/ui/NavbarSec";
import Link from "next/link";
import Footer from "@/components/Footer";
import bgimage from "@/assets/images/background1.jpeg";
import AllCampaignsCard from "@/components/ui/AllCampaignsCard";
import AllCampaignsList from "@/components/AllCampaignsList";

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
        <div className="hero-content text-center text-neutral-content w-screen grid">
          {/* TEMPORARY CARD FOR COMING SOON FEATURES */}
          <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
            <div className="card-body text-black">
              <h1 className="text-5xl font-bold">ALL AVAILABLE CAMPAINGS</h1>
              <p className="mt-10 text-xl">
                In this page you will be able to navigate through out campaigns
                data base, search for active campaigns and filter them by
                categories.
              </p>
              <p className="mt-10 text-xl">
                Currently only navigation through the featured campaigns is
                available.
              </p>
              <p className="mt-10 text-xl">This feature is coming soon!</p>
              <div className="badge bg-blue-700 text-lg text-yellow-300 border-none absolute bottom-12 -right-2 transform scale-150 -rotate-45">
                Coming Soon
              </div>
              <div className="badge bg-blue-700 text-lg text-yellow-300 border-none absolute top-12 -left-2 transform scale-150 -rotate-45">
                Coming Soon
              </div>
            </div>
          </div>
          {/* TEMPORARY CARD FOR COMING SOON FEATURES */}
          <AllCampaignsList />
        </div>
      </div>

      <Footer />
    </>
  );
}
