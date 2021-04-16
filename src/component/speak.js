const speak = (temp,city) => {
    let speech = new SpeechSynthesisUtterance()
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = .5;
    speech.text = `Today's ${temp} degrees in ${city}`
    window.speechSynthesis.speak(speech)

}
export default speak