import React, { Component } from 'react'
import { Route, Link, BrowserRouter,Switch } from "react-router-dom";
import Contact from './component/Contact';
import "./Menu.css"
import { HiMenu } from "react-icons/hi";
import App from './component/App';
import Footer from "./component/Footer"
import NotFound from './component/NotFound';
export default class Menu extends Component {
    Openmenu = () => {
        document.getElementById("menu").style.width = "20%";

    }
    CloseMenu = () => {
        document.getElementById("menu").style.width = "0px";
    }
    render() {
        return (
            <BrowserRouter>
            <div className="container-fluid mycontent">
                
                    <nav className="menu-item " id="menu">
                        <span className="close-icon" onClick={this.CloseMenu}>&times;</span>
                        <Link to="/" className="menu-link">خانه</Link>
                        <Link to="/contact" className="menu-link">تماس با من</Link>
                    </nav>

                    <div className="myicon row">
                        <div className="col"><span className="icon-menu" onClick={this.Openmenu}>منو <HiMenu /> </span></div>

                    </div>
                    <Switch>
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/" component={App} />
                    <Route component={NotFound}/>
                    </Switch>
                    <Footer />
               
            </div>
            </BrowserRouter>

        )
    }
}
