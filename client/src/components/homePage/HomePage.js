import { useState } from "react";
import Search from "../search/Search";
import Card from "../card/Card";
import { fetchWeatherData } from "../../services/WeatherService";
import "./HomePage.css";

const HomePage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (cityName) => {

        setError(""); // איפוס שגיאות קודמות
        setWeatherData(null);
        if (!cityName.trim()) {
            setError("City name is a required field.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(cityName)) {
            setError("City name must contain only English letters and spaces!");
            return;
        }
        try {
            const data = await fetchWeatherData(cityName); // קריאה לשירות
            console.log(data);
            setWeatherData(data); // עדכון סטייט
        } catch (error) {
            setError(error.message); // הצגת שגיאה שנכנסה מ-WeatherService
        } finally {
            setIsLoading(false); // סיום טעינה
        }
    };

    return (
        <div className="homepage">
            <div className="rap" >
                <img src="/logo.png" alt="Logo" className="logo" />

                <p className="home-page-text">Use our weather app<br /> to see the weather <br />around the world</p>

                <Search onSearch={handleSearch} isLoading={isLoading} errorMessage={error} />
            </div>

            {weatherData ? <Card className="card-area" weatherData={weatherData} />:<div className="cardHolder"></div>}
        </div>
    );
};

export default HomePage;
