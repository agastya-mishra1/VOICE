var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
//document.getElementById("textbox").innerHTML="";
recognition.start();    
}
recognition.onresult=function(event){
console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innnerHTML=Content;
console.log(Content);
if(Content=="take my selfie"){
    console.log("taking selfie...");
    speak();
} 
else{
    quiet();
}   
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconds";
    var utter = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utter);
    Webcam.attach(camera);
setTimeout(function(){
take_snap();
save();       
}, 5000);
}


function quiet(){
    var synth = window.speechSynthesis;
    speakdata = "Please can you only say take my selfie";
    var utter = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utter);
    
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function take_snap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';  
    });
}
function save(){
    link = document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href = image;
    link.click();
}