import styled from 'styled-components';
import React from 'react';
import pressure from '../icons/pressure.svg';
import temp from '../icons/temp.svg';
import humidity from '../icons/humidity.svg';
import wind from '../icons/wind.svg';
import sunny from '../icons/sunny.svg';
import night from '../icons/night.svg';
import day from '../icons/day.svg';
import cloudyNight from '../icons/cloudy-night.svg';
import cloudy from '../icons/cloudy.svg';
import perfectDay from '../icons/perfect-day.svg';
import rain from '../icons/rain.svg';
import rainNight from '../icons/rain-night.svg';
import storm from '../icons/storm.svg';

export const WeatherInfoIcons = {
  sunset: temp,
  sunrise: temp,
  humidity: humidity,
  wind: wind,
  pressure: pressure,
};

export const WeatherImg = {
  '01d': sunny,
  '01n': night,
  '02d': day,
  '02n': cloudyNight,
  '03d': cloudy,
  '03n': cloudy,
  '04d': perfectDay,
  '04n': cloudyNight,
  '09d': rain,
  '09n': rainNight,
  '10d': rain,
  '10n': rainNight,
  '11d': storm,
  '11n': storm,
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const BackButton = styled.button`
  padding: 10px;
  font-size: 14px;
  color: black;
  background-color: pink;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: bold;
`;

const WeatherInfoComponent = ({ name, value }) => {
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = ({ weatherInfo, onClickBack }) => {
  console.log(weatherInfo);
  const isDay = weatherInfo.weather[0].icon.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{Math.floor(weatherInfo.main.temp)}°C</span>
          {`| ${weatherInfo.weather[0].description} `}
        </Condition>
        <WeatherLogo src={WeatherImg[weatherInfo.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weatherInfo.name}, ${weatherInfo.sys.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? 'sunset' : 'sunrise'}
          value={getTime(weatherInfo.sys[isDay ? 'sunset' : 'sunrise'])}
        />
        <WeatherInfoComponent
          name="humidity"
          value={weatherInfo.main.humidity}
        />
        <WeatherInfoComponent name="wind" value={weatherInfo.wind.speed} />
        <WeatherInfoComponent
          name="pressure"
          value={weatherInfo.main.pressure}
        />
      </WeatherInfoContainer>
      <BackButton onClick={onClickBack}>Back to search</BackButton>
    </>
  );
};

export default WeatherComponent;
