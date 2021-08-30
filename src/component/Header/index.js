import React from 'react'
import { WiLightning } from "react-icons/wi";
import { FaCloud } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";
import "../Styles/Header.css"
const Header = () => {
    return (
        <header className="my-5">
            <div className="row header">
                <div className="col-md-10 d-flex justify-content-center  mx-auto">
                    <div className="allIcon">
                        <div className=" icon-contain ">
                            <div className="cloud"><FaCloud /></div>
                            <div className="lighting"><WiLightning /></div>
                            <div className="sunny">< IoSunny className="sun" /></div>
                        </div>
                        <p className="head-text">هواشناسی آنلاین </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
