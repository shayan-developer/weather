
const send =(email,msg)=>{
    window.Email.send({
        Host : "smtp.mailtrap.io",
        Username : "c9a63e14285c8b",
        Password : "58dd8473187721",
        To : 'shayan.dev.arak@gmail.com',
        From : email,
        Subject : "weather comment",
        Body : msg
    })
    .then(message=> alert("پیام با موفقیت ارسال شد"))
    .catch(error=>alert("خطا در ارسال پیام"))
    
}
export default send