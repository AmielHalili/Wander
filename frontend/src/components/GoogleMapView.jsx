import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 20.0,
  lng: 0.0
};

// 📍 Random Landmark Data
const landmarks = [
    {
      id: 1,
      name: 'Eiffel Tower',
      position: { lat: 48.8584, lng: 2.2945 }
    },
    {
      id: 2,
      name: 'Statue of Liberty',
      position: { lat: 40.6892, lng: -74.0445 }
    },
    {
      id: 3,
      name: 'Christ the Redeemer',
      position: { lat: -22.9519, lng: -43.2105 }
    },
    {
      id: 4,
      name: 'Great Wall of China',
      position: { lat: 40.4319, lng: 116.5704 }
    },
    {
      id: 5,
      name: 'Pyramids of Giza',
      position: { lat: 29.9792, lng: 31.1342 }
    },
    {
      id: 6,
      name: 'Sydney Opera House',
      position: { lat: -33.8568, lng: 151.2153 }
    },
    {
      id: 7,
      name: 'Taj Mahal',
      position: { lat: 27.1751, lng: 78.0421 }
    },
    {
      id: 8,
      name: 'Machu Picchu',
      position: { lat: -13.1631, lng: -72.5450 }
    },
    {
      id: 9,
      name: 'Big Ben',
      position: { lat: 51.5007, lng: -0.1246 }
    },
    {
      id: 10,
      name: 'Mount Fuji',
      position: { lat: 35.3606, lng: 138.7274 }
    },
    {
      id: 11,
      name: 'Burj Khalifa',
      position: { lat: 25.1972, lng: 55.2744 }
    },
    {
      id: 12,
      name: 'Niagara Falls',
      position: { lat: 43.0962, lng: -79.0377 }
    }
  ];
  

function GoogleMapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerClick = (id) => {
    setActiveMarker(id);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
    >
      {landmarks.map((landmark) => (
        <Marker
          key={landmark.id}
          position={landmark.position}
          onClick={() => handleMarkerClick(landmark.id)}
        >
          {activeMarker === landmark.id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div><strong>{landmark.name}</strong></div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  ) : <div>Loading Map...</div>;
}

export default React.memo(GoogleMapView);
