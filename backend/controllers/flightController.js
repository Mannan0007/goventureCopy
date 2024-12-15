import axios from 'axios';
import Flight from '../models/flightModel.js';


export const getFlightDetailsByNumber = async (req, res) => {
    const { flightNumber } = req.query; // Expect the flight number as a query parameter

    if (!flightNumber) {
        return res.status(400).json({ message: 'Flight number is required' });
    }

    const options = {
        method: 'GET',
        url: 'https://flightera-flight-data.p.rapidapi.com/flight/info',
        params: { flnr: flightNumber }, // Passing the flight number dynamically
        headers: {
            'x-rapidapi-key': 'ada078e11bmsh6488eaf73e2ae03p171055jsnf589aab9d048', // Updated RapidAPI Key
            'x-rapidapi-host': 'flightera-flight-data.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // Check if the API returned any data
        if (!response.data || Object.keys(response.data).length === 0) {
            return res.status(404).json({ message: 'No flight data found for the provided flight number' });
        }

        res.status(200).json(response.data); // Send the flight details as the response
    } catch (error) {
        console.error('Error fetching flight details:', error.message);
        res.status(500).json({ message: 'Failed to fetch flight details', error: error.message });
    }
};
