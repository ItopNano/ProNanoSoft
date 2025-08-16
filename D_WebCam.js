var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var box = document.getElementById("box1");

function startRec(){

    box.innerText = "listening...";
    recognition.start();

}


recognition.onresult = function(event){

    console.log(event);
    var speech = event.results[0][0].transcript;
    console.log(speech);
    box.innerText = speech;
    box.style.color = "darkblue"
    box.style.fontSize = "170%"

    if(speech == "my selfie please"){
        capture();
    }
    else if(speech == "My selfie please"){
        capture();
    }
    else if(speech == "My selfie please."){
        capture();
    }
    else if(speech == "my selfie please."){
        capture();
    }



}



function capture(){

    var synth = window.speechSynthesis;
    var speak = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak);
    synth.speak(utterThis);

    Webcam.attach("camera");

    Webcam.set({

        width: 480,
        height: 320,
        image_format: "png",
        png_quality: 90

    })

    setTimeout(function(){
        take_selfie();
    },5000);

}

var pic = document.getElementById("pic");

function take_selfie(){

    Webcam.snap(function(data_uri){

        pic.innerHTML = '<img id="selfie" src="'+data_uri+'"/>'

    })


}

