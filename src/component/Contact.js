import React, { Component } from 'react'
import EmailToMe from './EmailToMe'
import "./Styles/Contact.css"
export default class Contact extends Component {
    render() {
        return (
            <>
                <div className=" contain-contact  ">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 ">
                            <h2 className="text-contact"> تماس با من</h2>
                            <table className="table  mytable">
                                <thead>
                                    <tr>
                                        <th scope="col">نام</th>
                                        <th scope="col">نام خانوادگی</th>
                                        <th scope="col">تلفن</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-row">
                                        <td>شایان</td>
                                        <td>شادان پور</td>
                                        <td>09305241553</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <EmailToMe/>
                </div>
            </>
        )
    }
}
