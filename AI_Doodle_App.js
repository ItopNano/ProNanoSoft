let classifier,canvas;
let ModelURL = 'https://teachablemachine.withgoogle.com/models/eJRy656BE/model.json';
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var voice = document.getElementById("voice");
function setup() {
  canvas = createCanvas(400, 400);
  canvas.background(220);
  classifier = ml5.imageClassifier(ModelURL);
  canvas.mouseReleased(classifyCanvas);
}
function classifyCanvas(){
  if(classifier){
    classifier.classify(canvas, gotResult);
  }
  else{
    console.log("Classifier not found!");
  }
}
function gotResult(error,result){
  if(error){
    console.log("error");
    return;
  }
  var label = result[0].label;
  var conf = result[0].confidence;
  console.log(label);
  console.log(conf);
  var synth = window.speechSynthesis;
  var speak_data = "This is a "+label
  var utter = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utter);
  var res= document.getElementById("res");
  res.innerHTML = "This is a "+label;
}
function draw() {
  strokeWeight(10);
  stroke(0);
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}
function cleanCanvas(){
  canvas.background(220);
}

