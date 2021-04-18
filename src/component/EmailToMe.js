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
    sendMail = (e) => {
        e.preventDefault()
        let emailAd = this.state.emailUser;
        let msg = this.state.message
        msg&&emailAd?send(emailAd, msg):alert("خطا در ارسال پیام")
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <form onSubmit={this.sendMail}>
                        <div className="form-group Email">
                            <p className="textEmail">همچنین میتوانید نظرات و انتقادات خود را ارسال کنید </p>
                            <input className="form-control addEmail" onChange={this.emailUsers} type="email"
                                placeholder="لطفا ایمیل خود را اینجا وارد کنید..." name="emailUser" required/>
                            <textarea className="content form-control" name="message" onChange={this.emailUsers}
                                placeholder="لطفا نظر خود را اینجا وارد کنید ..." rows="4" required/>
                            <button className=" btn send form-control" type="submit">ارسال</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
