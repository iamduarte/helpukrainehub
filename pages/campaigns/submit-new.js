import NavbarSec from "@/components/ui/NavbarSec";
import Link from "next/link";
import Footer from "@/components/Footer";
import bgimage from "@/assets/images/background1.jpeg";
import AddCampaignForm from "@/components/ui/AddCampaignForm";

export default function SubmitNew() {
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
        <div className="hero-content text-center text-neutral-content w-screen flex flex-col">
          <AddCampaignForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
