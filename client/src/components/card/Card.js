import React from 'react';
import './Card.css';

const Card = ({ weatherData }) => {
    console.log(weatherData);
    if (!weatherData) {
        return null;
    }
    const { location, current, forecast } = weatherData;
    const cityName = location.name;
    const country = location.country;
    const localtime = location.localtime;
    const temp = current.temp_c;
    const weatherConditions = current.condition.text;
    const precip = current.precip_mm;
    const humidity = current.humidity;
    const wind = current.wind_kph;
    const hourlyData = forecast.forecastday[0].hour; 
    console.log(cityName, country, localtime, temp, weatherConditions, precip, humidity, wind)
    const formatDate = (dateString) => {
        const [date, time] = dateString.split(" "); 
        const [year, month, day] = date.split("-"); 
        const shortYear = year.slice(-2); 
        return `${day}/${month}/${shortYear} at ${time}`; 
    };


    const cityTime = new Date(localtime); 

    const currentHourInCity = cityTime.getHours();
    const nextFiveHours = hourlyData
        .filter((hour) => {
            const hourTime = new Date(hour.time).getHours();
            return hourTime > currentHourInCity && hourTime <= currentHourInCity + 5;
        })
        .slice(0, 5);
    return (<div className='card-body'>
        <div className="card-container">
            <div className="cityName">
                {cityName}

            </div>
            <div className="country">

                {country}
            </div>
            <div className="date-time">{formatDate(localtime)}</div>
            <div className="temperature">{Math.round(temp)}°</div>
            <div className="condition">{weatherConditions}</div>
            <div className="details">
                <div>
                    <div className='t-details'>Precipitation</div>
                    <div className='in-details'>{precip} mm</div>
                </div>
                <div>
                    <div className='t-details'>Humidity</div>
                    <div className='in-details'>{humidity}%</div>
                </div>
                <div>
                    <div className='t-details'>Wind</div>
                    <div className='in-details'>{Math.round(wind)} km/h</div>
                </div>
            </div>

            <div className="hourly-forecast">
                {nextFiveHours.map((hour, index) => (
                    <div key={index}>
                        <div className="forecast-time">{hour.time.split(" ")[1].substring(0, 5)}</div>
                        <div className="forecast-temp">{Math.round(hour.temp_c)}°</div>
                    </div>
                ))}
            </div>
        </div></div>

    );
};

export default Card;
