import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: 48.86982,
      lng: 2.334579
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
  );
}