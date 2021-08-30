import React, { useState } from 'react'
import "./Styles/main.css"
import axios from "axios";
import {
    WiCloudy, WiDaySunny, WiMoonWaxingCrescent3
    , WiNightAltCloudy, WiDust
} from "react-icons/wi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Select from './Select';
import Detail from './Detail';
export default function Main() {
    const [loading, setLoading] = useState(false)
    const [weather, setweather] = useState({})
    const [showData, setShowData] = useState(false)
    let time = new Date();
    let hour = time.getHours()
    const handler = (event) => {
        setLoading(true)
        setShowData(false)
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&lang=fa&units=metric&appid=7e01bffff9e6f597752ff8f1bfccb6ab`
        axios.get(url)
            .then(res => {
                let data_temp = Math.round(res.data.main.temp);
                let wind_data = Math.round(res.data.wind.speed * 3.6);
                let icon_weather_data = res.data.weather[0].main;
                let weather_description = res.data.weather[0].description;
                let icon_weather;
                if (icon_weather_data === "Dust") {
                    icon_weather = <WiDust />
                }
                if (hour >= 19) {
                    if (icon_weather_data === "Clouds") {
                        icon_weather = <WiNightAltCloudy />
                    }
                    if (icon_weather_data === "Clear") {
                        icon_weather = <WiMoonWaxingCrescent3 />
                    }
                    if (icon_weather_data === "Dust") {
                        icon_weather = <WiDust />
                    }
                }
                if (hour < 19) {
                    if (icon_weather_data === "Clouds") {
                        icon_weather = <WiCloudy />
                    }
                    if (icon_weather_data === "Clear") {
                        icon_weather = <WiDaySunny />
                    }
                    if (icon_weather_data === "Dust") {
                        icon_weather = <WiDust />
                    }
                }
                setweather({
                    name: event.target.value,
                    temp: data_temp,
                    wind: wind_data,
                    icon: icon_weather,
                    description: weather_description,
                    display: ""
                })
                setLoading(false)
                setShowData(true)
            })

    }
    return (
        <div>
            <div className="main-contain row my-5">
                <div className="col-md-10 mx-auto ">
                    <Select onChange={handler} />
                    {loading && <div className="spiner"><AiOutlineLoading3Quarters className='spin-icon' /></div>}
                    {showData && <Detail
                        temp={weather.temp}
                        description={weather.description}
                        wind={weather.wind}
                        icon={weather.icon}
                        name={weather.name}
                    />}
                </div>
            </div>
        </div>
    )
}
