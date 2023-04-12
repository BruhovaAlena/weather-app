import styled from 'styled-components';
import SearchCityComponent from './components/SearchCityComponent';
import WeatherComponent from './components/WeatherComponent';
import { useState } from 'react';
import axios from 'axios';

export const WeatherIcons = {
  '01d': '/icons/sunny.svg',
  '01n': '/icons/night.svg',
  '02d': '/icons/day.svg',
  '02n': '/icons/cloudy-night.svg',
  '03d': '/icons/cloudy.svg',
  '03n': '/icons/cloudy.svg',
  '04d': '/icons/perfect-day.svg',
  '04n': '/icons/cloudy-night.svg',
  '09d': '/icons/rain.svg',
  '09n': '/icons/rain-night.svg',
  '10d': '/icons/rain.svg',
  '10n': '/icons/rain-night.svg',
  '11d': '/icons/storm.svg',
  '11n': '/icons/storm.svg',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 20px;
  max-width: 500px;
  width: 'full';
  background: white;
  font-family: Montserrat;
  margin-right: 10px;
  margin-left: 10px;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();

  const getWeatherData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent
          weatherInfo={weather}
          onClickBack={() => setWeather()}
        />
      ) : (
        <SearchCityComponent
          onCityChange={setCity}
          onGetData={getWeatherData}
        />
      )}
    </Container>
  );
}

export default App;
