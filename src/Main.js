import React, { useState ,useCallback} from 'react'
import "./main.css"
import axios from "axios";
import {
    WiCloudy, WiDust, WiDaySunny, WiMoonWaxingCrescent3
    , WiNightAltCloudy
} from "react-icons/wi";
export default function Main() {
    let data = {
        name: "",
        temp: 0,
        max_temp: 0,
        min_temp: 0,
        speed_wind: 0,
        wind: 0,
        icon: "",
        description: "",
        display:"none"
    }
    const [weather, setweather] = useState(data)
    let handler =useCallback( (event) => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + event.target.value + '&lang=fa&units=metric&appid=7e01bffff9e6f597752ff8f1bfccb6ab')
            .then(res => {
                console.log(res);
                let data_temp = res.data.main.temp
                let data_max_temp = res.data.main.temp_max
                let data_min_temp = res.data.main.temp_min
                let wind_data = Math.round(res.data.wind.speed * 3.6)
                let icon_weather_data = res.data.weather[0].main
                let weather_description = res.data.weather[0].description
                let icon_weather;
                let time = new Date();
                let hour = time.getHours()
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
                    name: res.data.name,
                    temp: data_temp,
                    max_temp: data_max_temp,
                    min_temp: data_min_temp,
                    wind: wind_data,
                    icon: icon_weather,
                    description: weather_description,
                    display:""
                })
            })
    },[])
    return (
        <div>
            <div className="main-contain row my-5">
                <div className="col-md-10 mx-auto ">
                    <select name="city" className="main-select form-control" onChange={handler}>
                        <option defaultValue value="">???????? ?????? ?????? ???? ???????????? ????????</option>
                        <option value="Tehran">??????????</option>
                        <option value="arak">????????</option>
                        <option value="qom">????</option>
                        <option value="hamedan">??????????</option>
                        <option value="khorramabad">?????? ????????</option>
                        <option value="zanjan">??????????</option>
                        <option value="sanandaj">??????????</option>
                        <option value="qazvin">??????????</option>
                        <option value="sari">????????</option>
                        <option value="rasht">??????</option>
                        <option value="gorgan">??????????</option>
                        <option value="ardebil">????????????</option>
                        <option value="tabriz">??????????</option>
                        <option value="orumiyeh">????????????</option>
                        <option value="kermanshah">????????????????</option>
                        <option value="ilam">??????????</option>
                        <option value="ahvaz">??????????</option>
                        <option value="yasuj">??????????</option>
                        <option value="bushehr">??????????</option>
                        <option value="shiraz">??????????</option>
                        <option value="isfahan">????????????</option>
                        <option value="kerman">??????????</option>
                        <option value="bandar-abbas">????????????????</option>
                        <option value="zahedan">????????????</option>
                        <option value="yazd">??????</option>
                        <option value="mashhad">????????</option>
                        <option value="bojnord">????????????</option>
                        <option value="birjand">????????????</option>
                        <option value="karaj">??????</option>
                        <option value="semnan">??????????</option>
                    </select>
                    <div className="row detail mt-5 " style={{display:weather.display}}>
                        <div className="col-6 numbers">
                            <div className="my-3 text">{weather.temp}&deg; : ?????? ???????? </div>
                            <div className="my-3 text"> {weather.wind} Km/h  : ???????? ??????</div>
                        </div>
                        <div className="col-6 text-center icon-detail">
                            <div className="my-5">
                            <div className="icon-show">{weather.icon}</div>
                            <div className=" mt-2 text">  {weather.description}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
