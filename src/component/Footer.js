import React from 'react'
import { FaTelegram, FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import "./footer.css"
export default function Footer() {
    return (
        <>
            <div className="row  footer">
                <div className="col-12 ">
                    <div className="text-footer mb-5">
                    &copy; طراحی شده توسط شایان شادان پور
                    </div>
                    <ul className="list">
                        <li className="list-item"><a href="#" rel="noopener" className="telegram"><FaTelegram /> </a></li>
                        <li className="list-item"><a href="#" className="youtube"><FaYoutube /> </a></li>
                        <li className="list-item"><a rel="noreferrer" href="https://www.instagram.com/shayan.shadanpour" target="_blank" className="instagram"><FaInstagram /> </a></li>
                        <li className="list-item"><a href="#" className="facebook"><FaFacebookSquare /> </a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}
