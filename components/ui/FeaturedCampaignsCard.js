import Image from "next/image";

export default function FeaturedCampaignsCard(props) {
  return (
    <div className="card card-compact max-w-xs bg-base-100 shadow-2xl mt-5 w-full md:w-4/5 lg:w-1/2">
      <figure
        className="flex justify-center items-center aspect-w-1 aspect-h-1"
        style={{ backgroundColor: props.logoBackground }}
      >
        <div className="aspect-content flex justify-center items-center w-full h-full">
          <Image
            src={props.image}
            alt={props.name}
            width={300}
            height={300}
            className="p-4"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black justify-center">{props.name}</h2>
        <p className="text-black text-center">{props.description}</p>
        <div className="card-actions justify-center mt-5">
          <a
            href={props.link}
            className="btn bg-blue-700 border-none text-yellow-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}
