import React, { Component } from 'react'
import "./Contact.css"
export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="row contain-contact  ">
                    <div className="col ">
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
            </>
        )
    }
}
