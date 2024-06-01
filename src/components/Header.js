
// src/components/Header.js
import React, { useState } from "react";
import styled from "styled-components";
import CityImage from "./cityImage";
import WeatherDisplay from "./weatherDisplay";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Fixed width for the header */
  padding: 20px;
  background-color: #fff;
  /* Add a right border for separation */
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 20px;
`;


const DateTime = styled.div`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;

const WeatherDescription = styled.div`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
`;

function Header({ onSearch, weatherData }) {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSearchChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
    onSearch(city);
  };
console.log('weather data',weatherData)

const getTodayDate = () => {
  const today = new Date();
  const day = today.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day of the week
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); // Get the time in 24-hour format
  return `${day}, ${time}`;
};
  return (
    <HeaderContainer>
      <form onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          value={city}
          onChange={handleSearchChange}
          placeholder="Search for places..."
        />
      </form>
      <WeatherDisplay weather={weatherData} />
      {/* <Temperature>{weatherData.temperature}°C</Temperature> */}
      <DateTime>{getTodayDate()}</DateTime>
      <WeatherDescription>{weatherData?.description}</WeatherDescription>
      <AdditionalInfo>Rain - {weatherData?.rain}%</AdditionalInfo>
      {/* <UnitToggle onClick={onUnitToggle}>°C / °F</UnitToggle>  */}
      <CityImage city={submittedCity} />
    </HeaderContainer>
  );
}

export default Header;