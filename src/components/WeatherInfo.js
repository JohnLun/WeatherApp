import { Component } from "react";
import './WeatherInfo.css';
import './InputInfo.js';
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=
//a13ba6a1cd4d057415ed6088b3c55464

export default class WeatherInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cityName: props.city,
            isLoaded: false,
            items: {},
            weather: []
        };
    }

    setCity(city) {
        // this.setState({
        //     cityName: city
        // })
        this.displayWeatherInfo(city);
    }
    displayWeatherInfo(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a13ba6a1cd4d057415ed6088b3c55464`)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data.main,
                        weather: data.weather[0]
                    });
                }
            )
    }

    setUrl(iconID){
        var url = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
        return url;
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <div className="weather-container">
                    <p>
                        {"Current: "}{((this.state.items.temp - 273.15) * 1.8 + 32).toFixed(2)}<span>&#176;</span>{"F"}
                        <br></br>
                        <br></br>
                        {"Max: "}{((this.state.items.temp_max - 273.15) * 1.8 + 32).toFixed(2)}<span>&#176;</span>{"F"}
                        <br></br>
                        {"Min: "}{((this.state.items.temp_min - 273.15) * 1.8 + 32).toFixed(2)}<span>&#176;</span>{"F"}
                        <br></br>
                        {this.state.weather.icon}

                        <br></br>
                        <img src={this.setUrl(this.state.weather.icon)} alt="Weather Icon" width="100" height="100"></img>
                    </p>    
                    
                </div>
            );
        }
        return (
            <div>
                failed
            </div>
        );
        
    }
}