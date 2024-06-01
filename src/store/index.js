import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./weatherSlice";
const store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});

export default store;
