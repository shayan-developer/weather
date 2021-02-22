import React, { Component } from 'react'
import Footer from './Footer'
import "./Contact.css"
export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="row contain-contact  ">
                    <div className="col ">
                        <p className="text-contact">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <table class="table table-hover table-info mytable">
                            <thead>
                                <tr>
                                    <th scope="col">نام</th>
                                    <th scope="col">نام خانوادگی</th>
                                    <th scope="col">تلفن</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>شایان</td>
                                    <td>شادان پور</td>
                                    <td>09305241553</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
