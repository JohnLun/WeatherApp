import { Component, useRef } from 'react';
import './App.css';
import InputInfo from './InputInfo';
import WeatherInfo from './WeatherInfo';
function App () {
  const cityName = '';
  const weatherInfoRef = useRef();

  const setCityName = (cityName) => {
    cityName = cityName;
    weatherInfoRef.current.setCity(cityName);
  }

  
  return (
    <div className="App">
      <InputInfo onChangeCity={setCityName}/>
      <WeatherInfo ref={weatherInfoRef} city={cityName}/>
    </div>
  );
}

export default App;

