import React from "react";
import Marquee from "react-fast-marquee";

// Client logos (replace with your actual file paths)
import client1 from "../assets/client1.png";
import client2 from "../assets/client4.webp";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";


const ClientsMarquee = () => {
  const logos = [client1, client2, client3, client4, client5, client6, client7];

  return (
    <div className="bg-white py-14 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-10">
        Suraj Enterprises’ Clients Across Different Industries
      </h2>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="mx-10 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientsMarquee;
