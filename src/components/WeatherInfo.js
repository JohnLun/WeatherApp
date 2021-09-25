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
            items: {}
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
                        items: data.main
                    });
                }
            )
    }
    render() {
        if(this.state.isLoaded) {
            return (
                <div className="weather-container">
                    <p>
                        {this.state.items.temp}
                        <br></br>
                        {this.state.items.temp_min}
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