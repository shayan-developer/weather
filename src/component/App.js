import React, { Component } from 'react'
import "./App.css"
import Main from "./Main"
import { WiDaySunny, WiLightning } from "react-icons/wi";
export default class App extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="row header">
                        <div className="col-md-10 d-flex justify-content-center mx-auto">
                            <div className="text-head my-auto text-center">
                                <h3 className="mb-5 ">سامانه آنلاین وضعیت هوا</h3>
                                <span >< WiDaySunny className="icon-head" /></span>
                                <span><WiLightning className="icon-second" /></span>
                            </div>
                        </div>
                    </div>
                </header>
                <Main />
            </>
        )
    }
}
