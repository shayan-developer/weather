import React, { Component } from 'react'
import Footer from './Footer'
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image5 from "./images/image5.jpg"
import "./nature.css"
export default class Nature extends Component {
    render() {
        return (
            <>
            <div className="row py-5 images my-font">
                <div className="col-md-4 my-5">
                        <div className="card ">
                            <img className="card-img-top" src={image3} alt="عکس طبیعت" />
                            <div className="card-body">
                                <h5 className="card-title ">طبیعت زیبای شمال</h5>
                                <p className="card-text ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        </div>
                        </div>
                 </div>
                    <div className="col-md-4 my-5">
                        <div className="card">
                            <img className="card-img-top" src={image2} alt="عکس طبیعت" />
                            <div className="card-body">
                                <h5 className="card-title">طبیعت زیبای شمال</h5>
                                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-5">
                        <div className="card">
                            <img className="card-img-top" src={image5} alt="عکس طبیعت" />
                            <div className="card-body">
                                <h5 className="card-title">طبیعت زیبای شمال </h5>
                                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                            </div>
                        </div>
                    </div>
                
              
            </div>
            <Footer />
            </>
        )
    }
}
