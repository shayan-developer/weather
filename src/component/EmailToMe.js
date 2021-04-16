import React, { Component } from 'react'
import "./Styles/EmailToMe.css"
import send from "./sendEmail"
export default class EmailToMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            emailUser: ""
        }
    }
    emailUsers = (event) => {
        let value = event.target.value;
        let name = event.target.name
        this.setState({ [name]: value })
    }
    sendMail=()=>{
        let emailAd=this.state.emailUser;
        let msg=this.state.message
        send(emailAd,msg)
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <div className="form-group Email">
                        <p className="textEmail">همچنین میتوانید نظرات و انتقادات خود را ارسال کنید </p>
                        <input className="form-control addEmail" onChange={this.emailUsers}
                            placeholder="لطفا ایمیل خود را اینجا وارد کنید..." name="emailUser" />
                        <textarea className="content form-control" name="message" onChange={this.emailUsers}
                            placeholder="لطفا نظر خود را اینجا وارد کنید ..." rows="4" />
                        <button className=" btn send form-control" onClick={this.sendMail}>ارسال</button>
                    </div>
                </div>
            </div>
        )
    }
}
