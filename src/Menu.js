import React, { Component } from 'react'
import { Route, Link, BrowserRouter } from "react-router-dom";
import Contact from './Contact';
import "./Menu.css"
import { HiMenu } from "react-icons/hi";
import App from './App';
import Nature from './Nature';

export default class Menu extends Component {
    Openmenu = () => {
        document.getElementById("menu").style.width = "30%";
      
    }
    CloseMenu = () => {
        document.getElementById("menu").style.width = "0px";
    }
    render() {
        return (
            <div className="container-fluid mycontent">
                <BrowserRouter>
                    <nav className="menu-item " id="menu">
                        <span className="close-icon" onClick={this.CloseMenu}>&times;</span>
                        <Link to="/" className="menu-link">خانه</Link>
                        <Link to="/Nature" className="menu-link">طبیعت </Link>
                        <Link to="" className="menu-link"> مقالات </Link>
                        <Link to="/contact" className="menu-link"> ارتباط با ما </Link>
                    </nav>

                    <div className="myicon row">
                        <div className="col"><span className="icon-menu" onClick={this.Openmenu}>منو <HiMenu /> </span></div>

                    </div>
                    <Route path="/contact" component={Contact} />
                    <Route path="/Nature" component={Nature} />
                    <Route exact path="/" component={App} />

                </BrowserRouter>
            </div>

        )
    }
}
