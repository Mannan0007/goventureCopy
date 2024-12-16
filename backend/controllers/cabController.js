import axios from 'axios';

export const getCabDetails = async (req, res) => {
  const { destination } = req.query;

  if (!destination) {
    return res.status(400).json({ message: 'Destination is required' });
  }

  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/taxi/searchLocation',
    params: { query: destination },
    headers: {
      'x-rapidapi-key': '6247f98e83mshc67285fe30457b6p1adc3ajsn862ff08a6230',
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);

    // Extract the data array from the API response
    const locations = response.data?.data || [];

    // Check if the locations array is empty
    if (locations.length === 0) {
      return res.status(404).json({ message: 'No locations found for the specified destination' });
    }

    // Process and return the relevant fields
    const formattedLocations = locations.map(location => ({
      name: location.name || 'N/A',
      type: location.types || 'N/A',
      city: location.city || 'N/A',
      country: location.country || 'N/A',
      latitude: location.latitude || 'N/A',
      longitude: location.longitude || 'N/A',
      googlePlaceId: location.googlePlaceId || 'N/A',
    }));

    res.status(200).json(formattedLocations);
  } catch (error) {
    console.error('Error fetching location data:', error.message);
    res.status(500).json({ message: 'Error fetching location data' });
  }
};
