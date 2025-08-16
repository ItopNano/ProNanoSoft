var canvas,noseX,noseY,video;

function preload(){
	moustache = loadImage('https://i.postimg.cc/DyqbkY30/Image20250318152234.png');
}


function setup(){
	canvas = createCanvas(500,400);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(500,400);
	video.hide();

	var poseNet = ml5.poseNet(video);
	console.log("Model is Loaded!");

	poseNet.on('pose',gotPoses);

}

function gotPoses(results){
	console.log(results[0]);
	noseX = results[0].pose.nose.x-18;
	noseY = results[0].pose.nose.y;

}

function draw(){
	image(video, 0,0,500,400);
	image(moustache,noseX,noseY, 35,20);
}

function save(){
	save("im1.png");
}