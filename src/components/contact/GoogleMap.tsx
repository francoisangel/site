import React from 'react';

interface GoogleMapProps {
  address: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address }) => {
  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`;
  
  return (
    <div className="w-full h-full min-h-[400px]">
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      ></iframe>
    </div>
  );
};

export default GoogleMap;