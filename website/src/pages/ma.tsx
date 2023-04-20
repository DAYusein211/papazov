import { MarkerF, useLoadScript, GoogleMap } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: 28, lng: 100 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      <GoogleMap
  options={mapOptions}
  zoom={14}
  center={mapCenter}
  mapTypeId={google.maps.MapTypeId.SATELLITE}
  mapContainerStyle={{ width: '800px', height: '800px' }}
  onLoad={() => console.log('Map Loaded')}
>
  <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
</GoogleMap>
    </div>
  );
};

export default Home;