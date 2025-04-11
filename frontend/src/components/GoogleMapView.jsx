import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 25.276987, // default coordinates (example: Dubai)
  lng: 55.296249
};

function GoogleMapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : <div>Loading Map...</div>;
}

export default React.memo(GoogleMapView);
