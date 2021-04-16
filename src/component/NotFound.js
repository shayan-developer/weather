import React from 'react'
import "./Styles/Notfound.css"
import { BiSad } from "react-icons/bi";
export default function NotFound() {
    return (
        <div className=" row notfound justify-content-center">
            <div className="col-md-8 details">
                <p className="icon"><BiSad/></p>
                <p>404</p>
                <p>Not Found!</p>
            </div>
        </div>
    )
}
            