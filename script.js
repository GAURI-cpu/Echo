let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark');
};


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Maam")
    }
    else if(hours>=12 && hours<4){
        speak("Good Afternoon Maam")
    }
    else {
        speak("Good evening Maam")
    }
}
// window.addEventListener('load', () => {
//     setTimeout(wishMe, 1000); 
// })

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex  // Get last result index
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript)
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    message = message.toLowerCase().trim(); 
    console.log("Processed message:", message);  

    if (message.includes("hello") || message.includes("hey")) {  
        console.log("Matched 'hello', speaking now...");  
        speak("Hello Ma'am, what can I help you with?");
    }
    else if(message.includes("who are you")){
        speak("I am Echo,created by Gauri mam")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    
    else{
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}