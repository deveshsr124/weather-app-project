// src/components/WeatherDisplay.js
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Temperature = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 24px;
  color: #888;
`;

const UnitToggle = styled.button`
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
  cursor: pointer;
  margin-bottom: 10px;
`;

function WeatherDisplay({ weather }) {
  console.log('weather',weather)
  // const [unit, setUnit] = useState("C");
  const { unit, city } = useSelector((state) => state.weather);

  // const toggleUnit = () => {
  //   setUnit(unit === "C" ? "F" : "C");
  // };

 

  if (!weather || !weather.main || !weather.weather) {
    return <WeatherContainer>No weather data available</WeatherContainer>;
  }

  const getUnitSymbol = () => {
    return unit === "metric" ? "C" : "F";
  };
  return (
    <WeatherContainer>
      <Temperature>
        {Math.round((weather.main.temp))}°{getUnitSymbol()}
      </Temperature>
      <Description>{weather.weather[0].description}</Description>
    </WeatherContainer>
  );
}

export default WeatherDisplay;