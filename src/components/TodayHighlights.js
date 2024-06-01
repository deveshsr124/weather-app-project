import React from "react";
import styled from "styled-components";

const HighlightsContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HighlightTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HighlightValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const HighlightSubValue = styled.div`
  font-size: 14px;
  color: #888;
`;

const HighlightIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

function TodayHighlights({ weather }) {
  console.log('weather',weather)
  return (
    <HighlightsContainer>
      <Title>Today's Highlights</Title>
      <CardsContainer>
        <HighlightCard>
          <HighlightTitle>UV Index</HighlightTitle>
          <HighlightIcon>🌞</HighlightIcon>
          <HighlightValue>{weather.uvi}</HighlightValue>
        </HighlightCard>
        <HighlightCard>
          <HighlightTitle>Wind Status</HighlightTitle>
          <HighlightIcon>🌬️</HighlightIcon>
          <HighlightValue>{weather.wind.speed} km/h</HighlightValue>
          <HighlightSubValue>{weather.wind.deg}°</HighlightSubValue>
        </HighlightCard>
        <HighlightCard>
          <HighlightTitle>Sunrise & Sunset</HighlightTitle>
          <HighlightIcon>🌅</HighlightIcon>
          <HighlightValue>
            <div>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</div>
            <div>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</div>
          </HighlightValue>
        </HighlightCard>
        <HighlightCard>
          <HighlightTitle>Humidity</HighlightTitle>
          <HighlightIcon>💧</HighlightIcon>
          <HighlightValue>{weather.main.humidity}%</HighlightValue>
        </HighlightCard>
        <HighlightCard>
          <HighlightTitle>Visibility</HighlightTitle>
          <HighlightIcon>👁️</HighlightIcon>
          <HighlightValue>{weather.visibility / 1000} km</HighlightValue>
        </HighlightCard>
        <HighlightCard>
          <HighlightTitle>Air Quality</HighlightTitle>
          <HighlightIcon>🌫️</HighlightIcon>
          <HighlightValue>{weather.airQuality}</HighlightValue>
        </HighlightCard>
      </CardsContainer>
    </HighlightsContainer>
  );
}

export default TodayHighlights;