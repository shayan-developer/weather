import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import "../Styles/Menu.css"
const Menu = () => {
    const [show , setShow]=useState(false)
    const openmenu = () => {setShow(!show)}
    return (
        <>
            <nav className="menu-item " style={{ width:show ? "200px" :"0"}} id="menu">
                <Link to="/" className="menu-link">خانه</Link>
                <Link to="/about" className="menu-link">تماس با من</Link>
            </nav>

            <div className="myicon row">
                <div className="col"><span className="icon-menu" onClick={openmenu}><HiMenu /> </span></div>

            </div>
        </>
    )
}

export default Menu
