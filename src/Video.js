import React, { Component } from 'react'
import axios from "axios";
import "./image.css"
export default class Video extends Component {
    constructor(props) {
        super(props)
        this.state={
            image:""
        }
    }
    componentDidMount(){
        axios.get("https://api.nasa.gov/planetary/apod?api_key=Z3xjEcDAI8v6imaOSYNyf7iqzxm2uI37739fHuxe ")
        .then((res)=>{
            this.setState({image:res.data.url})
            console.log(res)})
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                   <div className="mycontain"> <img src={this.state.image} className="img-fluid "  /></div>
        
                </div>
            </div>
        )
    }
}
