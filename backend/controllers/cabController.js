import axios from 'axios';

// Define the function to get cab details based on destination
export const getCabDetails = async (req, res) => {
  const { destination } = req.query; // Extract destination from query parameters

  // If no destination is provided, return an error message
  if (!destination) {
    return res.status(400).json({ message: 'Destination is required' });
  }

  // Set up the API request options with the hardcoded API key and host
  const options = {
    method: 'GET',
    url: 'https://sky-scanner3.p.rapidapi.com/cars/auto-complete', // The endpoint for fetching car options
    params: { query: destination }, // Query parameter is the destination
    headers: {
      'x-rapidapi-key': '6247f98e83mshc67285fe30457b6p1adc3ajsn862ff08a6230', // Your RapidAPI key here
      'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com' // API host
    }
  };

  try {
    // Make the API request
    const response = await axios.request(options);

    // Check if the API response has data
    if (response.data && response.data.length > 0) {
      // If data found, send it back as a response
      return res.status(200).json(response.data);
    } else {
      // If no data found, return a 404 error
      return res.status(404).json({ message: 'No cab options found for the specified destination' });
    }
  } catch (error) {
    // Handle API request errors
    console.error('API Request Error:', error);
    return res.status(500).json({ message: 'Error fetching location data' });
  }
};
