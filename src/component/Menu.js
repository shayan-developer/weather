import React, { Component } from 'react'
import { Route, Link, BrowserRouter,Switch } from "react-router-dom";
import Contact from './Contact';
import "./Styles/Menu.css"
import { HiMenu } from "react-icons/hi";
import App from './App';
import Footer from "./Footer"
import NotFound from './NotFound';
export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state={
            width:"0px"
        }
    }
    Openmenu = () => {this.setState({width:"20%"})}
    CloseMenu = () => {this.setState({width:"0px"})}
    render() {
        return (
            <BrowserRouter>
            <div className="container-fluid mycontent">
                
                    <nav className="menu-item "style={{width:this.state.width}} id="menu">
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
