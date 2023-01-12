import { useState } from "react"
import { useEffect } from "react"
import * as weatherCss from "./weather.css"

const WeatherIndex = ()=>{

    const [weather, setWeather] = useState("")
    const lat = 37.801275
    const lon =  -122.442734

    // const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
    const weatherAPIKey = "d83d558df2b96d5f6ba94a8ba0980bf5"


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

    // const weatherList = weather.list

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
                <div className='weather-items'>
                    <p>{weatherItem.weather[0].main}</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`}></img>
                    <p>{weatherItem.main.temp_min}  °F min / {weatherItem.main.temp_max}  °F max</p>
                </div>
               )
            })}
        </div>
    )

}

export default WeatherIndex;