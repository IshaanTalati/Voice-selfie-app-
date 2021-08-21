var SpeechRecognition = window.webkitSpeechRecognition;

var recogniton = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recogniton.start();
}

recogniton.onresult = function (event){
console.log(event)    

var Content = event.results[0][0].transcript;
console.log (Content);
document.getElementById("textbox").innerHTML = Content;
speak()
}

function speak(){
var synth = window.speechSynthesis;
speak_data= document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera)
}

webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });        
 camera = document.getElementById("camera")
                                                                           

 //if I cannot answer misses questions i have to write entire code 10 times