const speak = (temp) => {
    let speech = new SpeechSynthesisUtterance()
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = .5;
    speech.text = `damaye hava ${temp} mibashad`;
    window.speechSynthesis.speak(speech)

}
export default speak