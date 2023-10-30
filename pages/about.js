import NavbarSec from "@/components/ui/NavbarSec";
import Link from "next/link";
import Footer from "@/components/Footer";
import bgimage from "@/assets/images/background1.jpeg";

export default function About() {
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
        <div className="hero-content text-center text-neutral-content w-screen">
          <div className="w-2/3">
            <h1 className=" text-5xl font-bold"></h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
