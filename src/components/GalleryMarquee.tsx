import React from "react";

interface GalleryProps {
  images: string[];
}

const GalleryMarquee: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="inline-flex whitespace-nowrap animate-marquee">
        {images.map((image, index) => (
          <div key={`img1-${index}`} className="inline-block mx-4">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-64 w-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((image, index) => (
          <div key={`img2-${index}`} className="inline-block mx-4">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-64 w-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryMarquee;
