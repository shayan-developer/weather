import React, { useState } from 'react'
import "./main.css"
import axios from "axios";
import { WiCloudy, WiDust,WiDaySunny} from "react-icons/wi";
export default function Main() {
    let data = {
        name: "",
        temp: 0,
        max_temp: 0,
        min_temp: 0,
        speed_wind: 0,
        wind: 0,
        icon: "",
        description:""
    }
    const [weather, setweather] = useState(data)
    let handler = (event) => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + event.target.value + '&lang=fa&units=metric&appid=7e01bffff9e6f597752ff8f1bfccb6ab')
            .then(res => {
                let data_temp = res.data.main.temp
                let data_max_temp = res.data.main.temp_max
                let data_min_temp = res.data.main.temp_min
                let wind_data = Math.round(res.data.wind.speed * 3.6)
                let icon_weather_data = res.data.weather[0].main
                let weather_description = res.data.weather[0].description    
                let icon_weather;
                switch (icon_weather_data) {
                    case "Clouds": icon_weather = <WiCloudy />
                        break;
                    case "": icon_weather = <WiDust />
                        break;

                    default:
                        icon_weather=<WiDaySunny/>
                        break;
                }
                setweather({
                    name: res.data.name,
                    temp: data_temp,
                    max_temp: data_max_temp,
                    min_temp: data_min_temp,
                    wind: wind_data,
                    icon: icon_weather,
                    description:weather_description
                })
            })
    }
    return (
        <div>
            <div className="main-contain row my-5">
                <div className="col-md-10 mx-auto ">
                    <select name="city" className="main-select form-control" onChange={handler}>
                        <option defaultValue value="">لطفا شهر خود را انتخاب کنید</option>
                        <option value="Tehran">تهران</option>
                        <option value="arak">اراک</option>
                        <option value="karaj">کرج</option>
                    </select>
                    <div className="mt-5 text-center">


                        <div className=" detail ">
                            <div className="my-2 text"><span className="icon">{weather.icon}</span><h3 className="mb-4">{weather.name}</h3></div>
                            <div className="mb-2 text">{weather.temp}&deg; : دما فعلی </div>
                            <div className="mb-2 text">{weather.max_temp}&deg; : بیشترین دما </div>
                            <div className="mb-2 text">{weather.max_temp}&deg; : کمترین دما</div>
                            <div className="mb-2 text"> {weather.wind} Km/h  : سرعت باد</div>
                            <div className="mb-2 text rtl"> شرح : {weather.description}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
