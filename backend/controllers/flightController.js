import axios from 'axios';
import Flight from '../models/flightModel.js';

// Controller to fetch flight data from the IATA and ICAO Codes API
export const getAirlineData = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://iata-and-icao-codes.p.rapidapi.com/airlines',
        headers: {
            'x-rapidapi-key': '6247f98e83mshc67285fe30457b6p1adc3ajsn862ff08a6230', // Your RapidAPI Key
            'x-rapidapi-host': 'iata-and-icao-codes.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).json(response.data); // Return the API response to the client
    } catch (error) {
        console.error('Error fetching airline data:', error.message);
        res.status(500).json({ message: 'Failed to fetch airline data', error: error.message });
    }
};
