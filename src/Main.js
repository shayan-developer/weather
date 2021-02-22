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
                        <option defaultValue value="">لطفا شهر خود را انتخاب کنید</option>
                        <option value="Tehran">تهران</option>
                        <option value="arak">اراک</option>
                        <option value="qom">قم</option>
                        <option value="hamedan">همدان</option>
                        <option value="khorramabad">خرم آباد</option>
                        <option value="zanjan">زنجان</option>
                        <option value="sanandaj">سنندج</option>
                        <option value="qazvin">قزوین</option>
                        <option value="sari">ساری</option>
                        <option value="rasht">رشت</option>
                        <option value="gorgan">گرگان</option>
                        <option value="ardebil">اردبیل</option>
                        <option value="tabriz">تبریز</option>
                        <option value="orumiyeh">ارومیه</option>
                        <option value="kermanshah">کرمانشاه</option>
                        <option value="ilam">ایلام</option>
                        <option value="ahvaz">اهواز</option>
                        <option value="yasuj">یاسوج</option>
                        <option value="bushehr">بوشهر</option>
                        <option value="shiraz">شیراز</option>
                        <option value="isfahan">اصفهان</option>
                        <option value="kerman">کرمان</option>
                        <option value="bandar-abbas">بندرعباس</option>
                        <option value="zahedan">زاهدان</option>
                        <option value="yazd">یزد</option>
                        <option value="mashhad">مشهد</option>
                        <option value="bojnord">بجنورد</option>
                        <option value="birjand">بیرجند</option>
                        <option value="karaj">کرج</option>
                        <option value="semnan">سمنان</option>
                    </select>
                    <div className="row detail mt-5 " style={{display:weather.display}}>
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
                </div>

            </div>
        </div>
    )
}
