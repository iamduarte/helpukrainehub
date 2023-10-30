import NavbarSec from "@/components/ui/NavbarSec";
import Link from "next/link";
import bgimage from "@/assets/images/background1.jpeg";
import Footer from "@/components/Footer";

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
        <div className="hero-content text-center text-neutral-content w-screen">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body text-black">
              <h1 className="text-5xl font-bold">CONTACT US </h1>
              <p className="mt-10 text-xl">
                In this page you will be able to submit a contact form to reach
                out to us with questions, suggestions or any type of enquiry you
                need!
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
        </div>
      </div>
      <Footer />
    </>
  );
}
