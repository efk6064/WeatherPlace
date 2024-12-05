import axios from "axios";

const baseUrl="http://localhost:3000/api/weather";

export const getWeatherByCity=(city)=>{
    return axios.get(`${baseUrl}/${city}`);
}