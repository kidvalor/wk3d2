import styled from "styled-components";
import { useState } from "react";
import CityComponent from "./modules/City"
import WeatherComponent from "./modules/WeatherInfo";
import Axios from "axios";

export const WeatherIcons = {
    "01d": "/react-weather-app/icons/sunny.svg",
    "01n": "/react-weather-app/icons/night.svg",
    "02d": "/react-weather-app/icons/day.svg",
    "02n": "/react-weather-app/icons/cloudy-night.svg",
    "03d": "/react-weather-app/icons/cloudy.svg",
    "03n": "/react-weather-app/icons/cloudy.svg",
    "04d": "/react-weather-app/icons/perfect-day.svg",
    "04n": "/react-weather-app/icons/cloudy-night.svg",
    "09d": "/react-weather-app/icons/rain.svg",
    "09n": "/react-weather-app/icons/rain-night.svg",
    "10d": "/react-weather-app/icons/rain.svg",
    "10n": "/react-weather-app/icons/rain-night.svg",
    "11d": "/react-weather-app/icons/storm.svg",
    "11n": "/react-weather-app/icons/storm.svg",
};

const API_KEY = "8554c5268084fdcdf6b9d9ac68fb4389"
const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
`;

const City = styled.div`
display: flex;
flex-direction: column;
`;

const Weather = styled.div`
display: flex;
flex-direction: column;
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
front-weight: bold; 
`;


function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,);
    updateWeather(response.data);
  };
  return (
    
    <Container>
    {city && weather ? (
      <WeatherComponent weather={weather} city={city} />
    ) : (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
  </Container>

  );
}

export default App;
