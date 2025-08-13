'use client';

import type { MapProps } from '@vis.gl/react-google-maps';
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps';

import { LocationPickerAutocomplete } from '@/components/google/location-picker-autocomplete';
import { env } from '@/config/env';

type Props = MapProps;

const defaultOptions: Partial<MapProps> = {
  defaultCenter: {
    lat: 47.014_731_9,
    lng: 28.842_122_6,
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
  if (!env.googlePlaceKey) {
    return;
  }

  const options = {
    ...defaultOptions,
    ...props,
  };

  return (
    <APIProvider apiKey={env.googlePlaceKey}>
      <LocationPickerAutocomplete />

      <GoogleMap {...options} />
    </APIProvider>
  );
};

export { LocationPicker };
