var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var voice = document.getElementById("voice");

var x,y, rad, side,i=length,wd;

function startRec(){

    voice.innerHTML = "System is Listening...";
    recognition.start();

}


recognition.onresult = function(event){

    var lb = event.results[0][0].transcript;
    console.log(lb);
    voice.innerHTML = "I thing you are saying: "+lb;

    var synth = window.speechSynthesis;
    if(lb=="Circle."){
        x = Number((Math.random()*600).toFixed(0));
        y = Number((Math.random()*600).toFixed(0));

        var speak_data = "Circle is Drawen";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);

        circle(x,y,100);

    }

    else if(lb=="Square."){
        x = Number((Math.random()*600).toFixed(0));
        y = Number((Math.random()*600).toFixed(0));

        var speak_data = "Square is Drawen";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);

        square(x,y,100);
    }

    else if(lb=="Rectangle."){
        x = Number((Math.random()*600).toFixed(0));
        y = Number((Math.random()*600).toFixed(0));

        var speak_data = "Rectangle is Drawen";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);

        rect(x,y,200,120);
    }

    // else if(lb=="Triangle."){
    //     x = Number((Math.random()*600).toFixed(0));
    //     y = Number((Math.random()*600).toFixed(0));

    //     triangle(x,y,z,100);
    // }

    else{
        voice.innerHTML = "I can't do it!";
        var speak_data = "Sorry, I can't do this";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);

    }



}

function setup(){
    createCanvas(600, 600);
    background("lightgreen");

}

