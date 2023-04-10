import { useState } from "react"
import { useEffect } from "react"
import * as weatherCss from "./weather.css"

const weekdays = [
   "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const WeatherIndex = ({ lat, lon })=>{
    const [currentDay, setCurrentDay] = useState(new Date().getDay())
    const [weather, setWeather] = useState("")

    const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

    const fetchWeather = () => {
        let units = 'imperial';
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=${units}`
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(res.statusText)
                return res.json()
            })
            .then(data => {
                setWeather(data);
            })
            .catch(console.err)
    }


    useEffect(() => {
      fetchWeather()
    }, [lat, lon])
    
    if(!weather){
        return null
    }

    const getWeatherList = ()=>{
        let weatherList = []

        for(let i=0; i< weather.list.length; i++){
            if( i===0 || i % 8 ===0){
                weatherList.push(weather.list[i])
            }
        }
        return weatherList;
    }

    return(
        <div className='weather-container'>
            {getWeatherList().map((weatherItem, i)=>{
               return (
                <div className='weather-items' key={i}>
                    <p className="day-of-week">{weekdays[(currentDay + i) % weekdays.length]}</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`} className="weather-icon" alt="weather-icon"></img>
                    <p className="forecast">{weatherItem.weather[0].main}</p>
                    <p className="temps">{weatherItem.main.temp_min}°/ {weatherItem.main.temp_max}°F</p>
                </div>
               )
            })}
        </div>
    )

}

export default WeatherIndex;