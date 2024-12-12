import Train from '../models/trainModel.js';
import Booking from '../models/bookingModel.js';
import axios from 'axios';

// Controller to fetch train details
export const getTrainDetails = async (req, res) => {
    const { trainNumber } = req.query; // Expect train number from query parameters

    if (!trainNumber) {
        return res.status(400).json({ message: 'Train number is required' });
    }

    const options = {
        method: 'GET',
        url: `https://indian-railway-irctc.p.rapidapi.com/api/trains-search/v1/train/${trainNumber}`,
        params: {
            isH5: 'true',
            client: 'web'
        },
        headers: {
            'x-rapidapi-key': '6247f98e83mshc67285fe30457b6p1adc3ajsn862ff08a6230',
            'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com',
            'x-rapid-api': 'rapid-api-database'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.status(200).json(response.data); // Return the API response to the client
    } catch (error) {
        console.error('Error fetching train details:', error.message);
        res.status(500).json({ message: 'Failed to fetch train details', error: error.message });
    }
};
