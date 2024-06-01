// src/features/weatherSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weather: null,
  unit: "metric", // 'metric' for Celsius, 'imperial' for Fahrenheit
  city: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setWeather, setUnit, setCity } = weatherSlice.actions;

export const fetchWeatherData = (lat, lon) => async (dispatch, getState) => {
  const { unit } = getState().weather;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  );
  dispatch(setWeather(response.data));
};

export const fetchWeatherByCity = (city) => async (dispatch, getState) => {
  const { unit } = getState().weather;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  );
  dispatch(setWeather(response.data));
  dispatch(setCity(city));
};

export default weatherSlice.reducer;
