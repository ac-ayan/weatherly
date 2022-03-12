import React, { useEffect, useState } from "react";
import "../css/WeatherComponent.css";
function WeatherComponent() {
  const [weather, setWeather] = useState(null);
  const [weatherDesc, setDesc] = useState([]);
  const [search, setSearch] = useState("London");
  const [country, setCountry] = useState("India");
  const [iconCodeURL, setCodeURL] = useState("");
  //* API Access Section --------------------------------

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      const response = await fetch(url);
      const resJSON = await response.json();
      setWeather(resJSON.main);
      setDesc(resJSON.weather[0].description);
      setCodeURL(
        "http://openweathermap.org/img/wn/" +
          resJSON.weather[0].icon +
          "@2x.png"
      );
    };
    fetchApi();
  }, [search]);

  //* API Access Section Ends ----------------------------
  return (
    <div className="mainContainer">
      <div className="countrySection">
        {!weather ? (
          <h3>NO DATA FOUND</h3>
        ) : (
          <div className="dataPanel">
            <div className="imageSection">
              <img src={iconCodeURL} alt="" />
            </div>
            <div className="mainInfo">
              <div className="place">{search}</div>
              <div className="temp">{weather.temp}° C</div>
            </div>
            <div className="addText">
              Current weather condition:
              <br /> {weatherDesc}
            </div>
          </div>
        )}
        <div className="inputSection">
          <input></input>
        </div>
      </div>
      <div className="citySection">
        {!weather ? (
          <h3>NO DATA FOUND</h3>
        ) : (
          <div className="dataPanel">
            <div className="imageSection">
              <img src={iconCodeURL} alt="" />
            </div>
            <div className="mainInfo">
              <div className="place">{search}</div>
              <div className="temp">{weather.temp}° C</div>
            </div>
            <div className="addText">
              Current weather condition:
              <br /> {weatherDesc}
            </div>
          </div>
        )}
        <div className="inputSection">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter City"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
