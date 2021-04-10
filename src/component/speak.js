const speak = (temp,city) => {
    let speech = new SpeechSynthesisUtterance()
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = .5;
    speech.text = `Today's temperature in ${city} is ${temp} degrees Celsius`
    window.speechSynthesis.speak(speech)

}
export default speak