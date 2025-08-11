'use client';

import type { MapProps } from '@vis.gl/react-google-maps';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { LocationPickerAutocomplete } from '@/components/google/location-picker-autocomplete';

type Props = MapProps;

const defaultOptions: Partial<MapProps> = {
  defaultCenter: {
    lat: 47.0147319,
    lng: 28.8421226,
  },
  defaultZoom: 12,
  cameraControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  styles: [
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

const LocationPicker = ({ ...props }: Props) => {
  if (!process.env.GOOGLE_PLACE_API_KEY) {
    return;
  }

  const options = {
    ...defaultOptions,
    ...props,
  };

  return (
    <APIProvider apiKey={process.env.GOOGLE_PLACE_API_KEY}>
      <LocationPickerAutocomplete />

      <Map {...options} />
    </APIProvider>
  );
};

export { LocationPicker };
