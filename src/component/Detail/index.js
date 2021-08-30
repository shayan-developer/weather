import React from 'react'
import speak from '../speak'
import "../Styles/Detail.css"
const Detail = ({ temp, wind, icon, description ,name}) => {
    return (
        <>
            <div className="row detail mt-5 " >
                <div className="col-6 numbers">
                    <div className="my-3 text">{temp}&deg; : دما فعلی </div>
                    <div className="my-3 text"> {wind} Km/h  : سرعت باد</div>
                </div>
                <div className="col-6 text-center icon-detail">
                    <div className="my-5">
                        <div className="icon-show">{icon}</div>
                        <div className=" mt-2 text">  {description}</div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4" >
                <div className="col-md-10 speech">
                    <p>برای شنیدن وضعیت هوای امروز به زبان انگلیسی روی دکمه زیر کلیک کنید</p>
                    <p>Click on the button below to hear the weather in {name} today in English</p>
                    <button className="btn btn-primary speech-btn" onClick={() => speak(temp,name)}>Speech</button>
                </div>
            </div>
        </>
    )
}

export default Detail
