import { useState } from "react";
import "./Search.css";

const Search = ({ onSearch, errorMessage }) => {
    const [cityName, setCityName] = useState("");


    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(cityName);
        }
    };

    return (


        <div className="search">
            <p className='p'>City Name</p>
                <div className="input-wrapper">

                    <input
                        type="text"
                        className="inputText"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}

                    />
                    <input
                        type="button"
                        value={"Check"}
                        className="button"
                        onClick={handleSearchClick}

                    />
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>

    );
};

export default Search;
