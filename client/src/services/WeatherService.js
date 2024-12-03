import { getWeatherByCity } from "../features/weather/WeatherApi";

export const fetchWeatherData = async (cityName) => {
    try {
        const response = await getWeatherByCity(cityName);
        if (!response?.data?.location) {
            throw new Error('City not found. Please enter a valid city name.');
            return;
        }
        return response.data
    } catch (err) {
        throw new Error("We couldn't find the city you entered,Please try again.");



    }
}