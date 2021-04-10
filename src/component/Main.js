import React, { useState, useCallback } from 'react'
import "./main.css"
import axios from "axios";
import {
    WiCloudy, WiDaySunny, WiMoonWaxingCrescent3
    , WiNightAltCloudy,WiDust
} from "react-icons/wi";
import Select from './Select';
import data from "./initialValue";
import speak from "./speak"
export default function Main() {

    const [weather, setweather] = useState(data)
    const handler = useCallback((event) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&lang=fa&units=metric&appid=7e01bffff9e6f597752ff8f1bfccb6ab`
        axios.get(url)
            .then(res => {
                let data_temp = Math.round(res.data.main.temp);
                let wind_data = Math.round(res.data.wind.speed * 3.6);
                console.log(res.data);
                let icon_weather_data = res.data.weather[0].main;
                let weather_description = res.data.weather[0].description;
                let icon_weather;
                let time = new Date();
                let hour = time.getHours()
                if(icon_weather_data=="Dust"){
                    icon_weather=<WiDust/>
                }
                if (hour > 19) {
                    if (icon_weather_data == "Clouds") {
                        icon_weather = <WiNightAltCloudy />
                    }
                    if (icon_weather_data == "Clear") {
                        icon_weather = <WiMoonWaxingCrescent3 />
                    }
                }
                if (hour < 19) {
                    if (icon_weather_data == "Clouds") {
                        icon_weather = <WiCloudy />
                    }
                    if (icon_weather_data == "Clear") {
                        icon_weather = <WiDaySunny />
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

            })
    }, [weather])
    return (
        <div>
            <div className="main-contain row my-5">
                <div className="col-md-10 mx-auto ">
                    <Select onChange={handler} />
                    <div className="row detail mt-5 " style={{ display: weather.display }}>
                        <div className="col-6 numbers">
                            <div className="my-3 text">{weather.temp}&deg; : دما فعلی </div>
                            <div className="my-3 text"> {weather.wind} Km/h  : سرعت باد</div>
                        </div>
                        <div className="col-6 text-center icon-detail">
                            <div className="my-5">
                                <div className="icon-show">{weather.icon}</div>
                                <div className=" mt-2 text">  {weather.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4" style={{ display: weather.display }}>
                        <div className="col-md-10 speech">
                            <p>برای شنیدن وضعیت هوای امروز به زبان انگلیسی روی دکمه زیر کلیک کنید</p>
                            <p>Click on the button below to hear the weather in {weather.name} today in English</p>
                            <button className="btn btn-primary speech-btn" onClick={()=>speak(weather.temp,weather.name)}>Speech</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
