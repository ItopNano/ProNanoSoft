
Webcam.attach("#camera");

Webcam.set({

    width: 480,
    height: 320,
    image_format: "png",
    png_quality: 90

})

var pic = document.getElementById("pic");

function capture(){

    Webcam.snap(function(data_uri){

        pic.innerHTML = '<img id="selfie" src="'+data_uri+'"/>'

    })

}

var model = 'https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json';

var classifier;

var label = document.getElementById("label");

var acc = document.getElementById("acc");

function predict(){
    classifier = ml5.imageClassifier(model,check);
}

function check(){
    var img = document.getElementById("selfie");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if(error){
        console.log("Error");
        return;
    }

    console.log(result[0].label);
    console.log(result[0].confidence);

    label.innerHTML = "Prediction: " + result[0].label;

    acc.innerHTML = "Accuracy: " + (result[0].confidence*100).toFixed(1)+"%";

}
