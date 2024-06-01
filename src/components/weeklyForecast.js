// src/components/WeeklyForecast.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const DayForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100px;
`;

function WeeklyForecast({ city, unit }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );
      setForecast(response.data.list.slice(0, 7));
    };

    if (city) {
      fetchForecast();
    }
  }, [city, unit]);

  return (
    <ForecastContainer>
      {forecast.map((day, index) => (
        <DayForecast key={index}>
          <div>
            {new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </div>
          <div>{Math.round(day.main.temp)}°</div>
          <div>{day.weather[0].description}</div>
        </DayForecast>
      ))}
    </ForecastContainer>
  );
}

export default WeeklyForecast;
