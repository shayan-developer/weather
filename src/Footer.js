import React from 'react'
import { FaTelegram, FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import "./footer.css"
export default function Footer() {
    return (
<>
        <div className="row  footer">
            <div className="col-12 ">
                <div className="text-footer mb-5">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                </div>
                <ul className="list">
                    <li className="list-item"><a href="#" className="telegram"><FaTelegram /> </a></li>
                    <li className="list-item"><a href="#" className="youtube"><FaYoutube /> </a></li>
                    <li className="list-item"><a href="https://www.instagram.com/shayan.shadanpour" target="_blank" className="instagram"><FaInstagram /> </a></li>
                    <li className="list-item"><a href="#" className="facebook"><FaFacebookSquare /> </a></li>
                </ul>
            </div>
        </div>
        </>

    )
}
