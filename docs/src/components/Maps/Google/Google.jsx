import React from 'react'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '350px',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const API_KEY = 'AIzaSyCf6HxXciaOnzKGDmqT8VXtXvu_Coh-NTU'

function Google() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

  return (
    <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
        >
            <Marker position={center} />
        </GoogleMap>
    </div>
  )
}

export default Google
