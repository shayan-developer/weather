import React from 'react'
import { FaTelegram, FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import "./Styles/footer.css"
export default function Footer() {
    return (
        <>
            <div className="row  footer">
                <div className="col-12 ">
                    <div className="text-footer mb-5">
                        &copy; طراحی شده توسط شایان شادان پور
                    </div>
                    <ul className="list">
                        <li className="list-item">
                            <a href="https://t.me/shayan_one" target="_blank" rel="noreferrer" className="telegram">
                                <FaTelegram />
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="https://api.whatsapp.com/send?phone=989305241553" target="_blank" rel="noreferrer" className="Whatsapp">
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li className="list-item">
                            <a rel="noreferrer" href="https://www.instagram.com/shayan.shadanpour" target="_blank" className="instagram">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="https://github.com/shayan-developer" target="_blank" rel="noreferrer" className="github"><FaGithub /> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}
