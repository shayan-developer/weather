import React, { Component } from 'react'
import "./Styles/App.css"
import Main from "./Main"
import { WiLightning } from "react-icons/wi";
import { FaCloud } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";
export default class App extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="row header">
                        <div className="col-md-10 d-flex justify-content-center mx-auto">
                            <div className="allIcon my-auto">
                                <div className=" icon-contain ">
                                    <div className="cloud"><FaCloud /></div>
                                    <div className="lighting"><WiLightning  /></div>
                                    <div  className="sunny">< IoSunny className="sun"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Main />
            </>
        )
    }
}
