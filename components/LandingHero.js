/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import bgimage from "@/assets/images/background1.jpeg";

export default function LandingHero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundAttachment: "fixed",
      }}
      id="landing"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content w-screen mt-20">
        <div className="md:w-2/3">
          <h1 className=" text-2xl md:text-5xl font-bold">HELP UKRAINE HUB</h1>
          {/* <h3 className="mb-5 text-3xl font-bold">Campaign Hub</h3> */}
          <p className="mb-10 mt-10 text-md md:text-2xl">
            Welcome to HELP UKRAINE Campaign Hub, our main goal with this
            project is to gather all the aid funding projects in one easy to
            find platform.
            <br />
            Here you will be able to find active aid campaigns, search them by
            subjects and easily learn about them, navigate to them and
            contribute!
            <br />
            This is a non profit project that just aims to gather funding
            campaings and make them accessible to everyone!
          </p>
          <a
            className="btn  bg-blue-700 border-none text-yellow-300"
            href="/campaigns"
          >
            Check all campaigns
          </a>
        </div>
      </div>
    </div>
  );
}
