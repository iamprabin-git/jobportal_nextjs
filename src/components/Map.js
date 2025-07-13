import React from 'react';

const MapEmbed = () => {
  // Only the URL string (no iframe tags or attributes)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27191.67102904486!2d85.33121829999999!3d27.5585396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb14212a8436db%3A0x9e0805ab0f1be891!2sLele%2044700!5e1!3m2!1sen!2snp!4v1752392877552!5m2!1sen!2snp";

  return (
    <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={mapUrl}
        title="Location Map"
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default MapEmbed;