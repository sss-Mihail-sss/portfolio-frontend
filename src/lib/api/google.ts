export async function getGoogleMapAutocomplete(search: string): Promise<{
  suggestions: {
    placePrediction: {
      place: string;
      text: {
        text: string;
      };
    }
  }[]
}> {
  if (!process.env.GOOGLE_PLACE_API_KEY) {
    throw new Error('GOOGLE_PLACE_API_KEY is not defined');
  }

  const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': process.env.GOOGLE_PLACE_API_KEY,
      'X-Goog-FieldMask': 'suggestions.placePrediction.place,suggestions.placePrediction.text.text',
    },
    body: JSON.stringify({
      input: search,
    }),
  });

  console.log(response);

  return await response.json();
}
