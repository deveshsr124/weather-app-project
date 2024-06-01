// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherData,
  fetchWeatherByCity,
  setUnit,
} from "./store/weatherSlice";
import Header from "./components/Header";
import WeeklyForecast from "./components/weeklyForecast";
import TodayHighlights from "./components/TodayHighlights";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row; /* Changed to row for a two-column layout */
  align-items: flex-start; /* Align items at the start */
  padding: 20px;
  height: 100%;
  /* Full height of the viewport */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allow main content to take up remaining space */
  height: 100%;
  margin-left: 20px; /* Add some space between header and main content */
`;

const UnitToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const UnitToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function App() {
  const dispatch = useDispatch();
  const { weather, unit, city } = useSelector((state) => state.weather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      dispatch(fetchWeatherData(latitude, longitude));
    });
  }, [dispatch]);

  const handleSearch = (city) => {
    dispatch(fetchWeatherByCity(city));
  };

  const handleUnitToggle = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    dispatch(setUnit(newUnit));
    if (weather) {
      dispatch(fetchWeatherData(weather.coord.lat, weather.coord.lon));
    }
  };

  return (
    <Container>
      <Header onSearch={handleSearch} onUnitToggle={handleUnitToggle} weatherData={weather}/>
      {weather && (
        <MainContent>
          {/* <WeatherDisplay weather={weather} /> */}
          <UnitToggleContainer>
            <UnitToggleButton active={unit === "metric"} onClick={handleUnitToggle}>
              °C
            </UnitToggleButton>
            <UnitToggleButton active={unit === "imperial"} onClick={handleUnitToggle}>
              °F
            </UnitToggleButton>
          </UnitToggleContainer>
          <WeeklyForecast city={city} unit={unit} />
          <TodayHighlights weather={weather} />
        </MainContent>
      )}
    </Container>
  );
}

export default App;
