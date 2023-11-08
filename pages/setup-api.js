import { useState } from "react";
import NavbarSec from "@/components/ui/NavbarSec";
import Link from "next/link";
import Footer from "@/components/Footer";
import bgimage from "@/assets/images/background1.jpeg";
import { handleClientScriptLoad } from "next/script";

export default function ApiInfo() {
  const [isCopied, setIsCopied] = useState(false);
  //const apiLink = "http://localhost:3000/api/v1/campaigns";
  const apiLink = "https://helpukrainehub-cd14b.web.app/api/v1/campaings";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(apiLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
    });
  };

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
          <div className="card lg:card-side bg-base-100 shadow-xl mt-14 md:mt-0">
            <div className="card-body text-black">
              <h1 className="text-2xl md:text-5xl font-bold">SETUP OUR API</h1>
              <p className="mt-10 text-md md:text-xl">
                In this page you can find our API endpoint that you can use on
                your application to have access to all the campaigns in our
                database!
                <br />
                For the time being the only endpoint available will retrieve all
                the available campaigns in JSON format.
                <br />
                In the upcoming version it will be possible to filter data by
                categories, ids, location and more.
              </p>

              <div className="mockup-code mt-10 w-full md:w-auto lg:w-1/2 self-center relative">
                <button
                  onClick={handleCopyClick}
                  className="absolute top-0 right-0 text-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm mt-3 mr-4"
                >
                  {isCopied ? "Copied!" : "Copy Link"}
                </button>
                <pre>
                  <code className="text-xs sm:text-sm whitespace-normal">
                    {apiLink}
                  </code>
                </pre>
              </div>

              <Link
                href={apiLink}
                className="btn bg-blue-700 border-none text-yellow-300 mt-10 self-center"
              >
                Test API Endpoint
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
