import bgimage from "@/assets/images/background1.jpeg";

export default function CampaignsLoading() {
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
        <span className="loading loading-spinner loading-lg bg-yellow-300"></span>
      </div>
    </div>
  );
}
