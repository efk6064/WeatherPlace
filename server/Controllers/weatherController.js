import axios from "axios";

export const getWeatherByCity = (req, res) => {
    let { city } = req.params;
    const API_KEY = '5e27d86dd55b45718e7150050242811';
    const BASE_URL = 'https://api.weatherapi.com/v1';
    const endpoint = '/forecast.json';
    axios.get(`${BASE_URL}${endpoint}?key=${API_KEY}&q=${city}`)
    .then((response) => {
        return res.status(200).json(response.data);

    }).catch((err) => {
        return res.status(400).json(err)
    });

}