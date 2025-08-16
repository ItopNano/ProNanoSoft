

// Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/lr0G4ADIm/';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  acc = (results[0].confidence*100).toFixed(2);
  console.log(label);
  document.getElementById("res").innerHTML = label;
  document.getElementById("acc").innerHTML = acc+"%";

  var im1 = document.getElementById("im1");
  var im2 = document.getElementById("im2");
  var im3 = document.getElementById("im3");
  var im4 = document.getElementById("im4");
  
  if(label == "Clap"){
    im1.src = "aliens-01.gif"
    im2.src = "aliens-2.png"
    im3.src = "aliens-03.png"
    im4.src = "aliens-04.png"
  }

  else if(label == "Bell"){
    im1.src = "aliens-01.png"
    im2.src = "aliens-2.gif"
    im3.src = "aliens-03.png"
    im4.src = "aliens-04.png"
  }

  else if(label == "Mew"){
    im1.src = "aliens-01.png"
    im2.src = "aliens-2.png"
    im3.src = "aliens-03.gif"
    im4.src = "aliens-04.png"
  }

  else if(label == "Buzz"){
    im1.src = "aliens-01.png"
    im2.src = "aliens-2.png"
    im3.src = "aliens-03.png"
    im4.src = "aliens-04.gif"
  }

  else{
    im1.src = "aliens-01.png"
    im2.src = "aliens-2.png"
    im3.src = "aliens-03.png"
    im4.src = "aliens-04.png"
  }

}

