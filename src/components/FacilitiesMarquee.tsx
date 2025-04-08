import React from "react";

interface FacilityItem {
  title: string;
  image: string;
}

interface FacilitiesProps {
  facilities: FacilityItem[];
}

const FacilitiesMarquee: React.FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="inline-flex whitespace-nowrap animate-marquee-slow">
        {facilities.map((facility, index) => (
          <div key={`facility1-${index}`} className="inline-block mx-4">
            <div className="bg-secondary pb-5 rounded-lg shadow-lg w-80 overflow-hidden">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                loading="lazy"
              />
              <div className="text-lg md:text-xl font-semibold text-white text-center mt-4">
                {facility.title}
              </div>
            </div>
          </div>
        ))}

        {/* Duplicate facilities for seamless loop */}
        {facilities.map((facility, index) => (
          <div key={`facility2-${index}`} className="inline-block mx-4">
            <div className="bg-secondary pb-5 rounded-lg shadow-lg w-80 overflow-hidden">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                loading="lazy"
              />

              <div className="text-lg md:text-xl font-semibold text-white text-center mt-4">
                {facility.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesMarquee;
