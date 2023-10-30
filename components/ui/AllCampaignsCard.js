import Image from "next/image";
import Link from "next/link";

export default function AllCampaignsCard(props) {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl ">
      <figure
        className="md:w-1/4 h-64 md:h-auto"
        style={{ backgroundColor: props.logoBackground }}
      >
        <Image
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          className="p-4"
        />
      </figure>
      <div className="card-body text-black md:w-4/5 p-4">
        <h2 className="card-title text-3xl self-center">{props.name} TEST</h2>
        <p>{props.description}</p>
        <div className="card-actions md:justify-end justify-center mt-4">
          <div className="btn bg-blue-700 border-none text-yellow-300 ">
            More Info
          </div>
          <a
            className="btn bg-blue-700 border-none text-yellow-300"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Campaign Website
          </a>
        </div>
      </div>
    </div>
  );
}
