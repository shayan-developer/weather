import React from 'react'
import "./select.css"
export default function Select(props) {
    return (
        <>
            <select name="city" className="main-select form-control rtl " onChange={props.onChange}>
                <option defaultValue value="">لطفا شهر خود را انتخاب کنید</option>
                <option value="Tehran">تهران</option>
                <option value="arak">اراک</option>
                <option value="qom">قم</option>
                <option value="hamedan">همدان</option>
                <option value="khorramabad">خرم آباد</option>
                <option value="zanjan">زنجان</option>
                <option value="sanandaj">سنندج</option>
                <option value="qazvin">قزوین</option>
                <option value="sari">ساری</option>
                <option value="rasht">رشت</option>
                <option value="gorgan">گرگان</option>
                <option value="ardebil">اردبیل</option>
                <option value="tabriz">تبریز</option>
                <option value="orumiyeh">ارومیه</option>
                <option value="kermanshah">کرمانشاه</option>
                <option value="ilam">ایلام</option>
                <option value="ahvaz">اهواز</option>
                <option value="yasuj">یاسوج</option>
                <option value="bushehr">بوشهر</option>
                <option value="shiraz">شیراز</option>
                <option value="isfahan">اصفهان</option>
                <option value="kerman">کرمان</option>
                <option value="bandar-abbas">بندرعباس</option>
                <option value="zahedan">زاهدان</option>
                <option value="yazd">یزد</option>
                <option value="mashhad">مشهد</option>
                <option value="bojnord">بجنورد</option>
                <option value="birjand">بیرجند</option>
                <option value="karaj">کرج</option>
                <option value="semnan">سمنان</option>
            </select>
        </>
        
    )
}
