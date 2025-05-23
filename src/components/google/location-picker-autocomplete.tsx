'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ControlPosition, MapControl, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

import { Input } from '@/ui/input';
import { useDebounce } from '@/hooks/use-debounce';

const LocationPickerAutocomplete = () => {
  const map = useMap();
  const places = useMapsLibrary('places');

  const [sessionToken, setSessionToken] = useState<google.maps.places.AutocompleteSessionToken>();
  const [autocompleteService, setAutocompleteService] = useState<google.maps.places.AutocompleteService | null>(null);
  const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);

  const [addressSearch, setAddressSearch] = useState<string>('');
  const addressSearchDebounce = useDebounce(addressSearch, 1000);

  useEffect(() => {
    if (!places || !map) {
      return;
    }

    setAutocompleteService(new places.AutocompleteService());
    setPlacesService(new places.PlacesService(map));
    setSessionToken(new places.AutocompleteSessionToken());

    return () => {
      setAutocompleteService(null);
    };
  }, [map, places]);

  const { data, status } = useQuery({
    queryKey: ['google-map-place', addressSearchDebounce, sessionToken],
    queryFn: () => autocompleteService?.getPlacePredictions({
      input: addressSearchDebounce,
      sessionToken,
    }),
    enabled: (!!placesService && !!sessionToken && !!addressSearch),
  });

  console.log(status);

  if (!places) {
    return;
  }

  return (
    <MapControl position={ControlPosition.TOP_CENTER}>
      <div className='p-4'>
        <Input
          className='bg-background w-72 max-w-full'
          placeholder='Search address'
          value={addressSearch}
          onChange={event => setAddressSearch(event.target.value)}
        />

        {
          status === 'pending' ? (
            <div>Loading...</div>
          ) : status === 'error' ? (
            <div>Error</div>
          ) : data?.predictions.map(place => (
            <div key={place.description}>
              {place.description}
            </div>
          ))
        }

      </div>
    </MapControl>

  );
};

export { LocationPickerAutocomplete };
