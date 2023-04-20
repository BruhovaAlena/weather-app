import styled from 'styled-components';
import React from 'react';
import logo from '../icons/perfect-day.svg';

const StyledDiv = styled.div`
  border: 1px solid pink;
  border-radius: 80px;
  width: 160px;
  height: 160px;
  margin-top: 10px;
  /* background-color: black; */
`;

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin-top: 10px;
  margin-left: 10px;
`;
const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  /* border: black solid 1px; */
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;

  & input {
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid pink;
    /* border: none; */
    /* outline: none; */
    font-weight: bold;
    margin-right: 5px;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    color: black;
    background-color: pink;
    border-radius: 10px;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const SearchCityComponent = ({ onCityChange, onGetData }) => {
  return (
    <>
      <StyledDiv>
        <WeatherLogo src={logo} />
      </StyledDiv>
      <ChooseCityLabel>Find Weather of your city </ChooseCityLabel>
      <SearchBox onSubmit={onGetData}>
        <input
          placeholder="Write a city"
          onChange={(e) => {
            onCityChange(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default SearchCityComponent;
