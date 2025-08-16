



var canvas ,x ,y , poseNet, video;

let sX=325;
let sY=240;
let fX=450;
let fY=150;
let score=0;
let size=20;


function setup(){
	canvas = createCanvas(650,480);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(650,480);
	video.hide();

	
	poseNet = ml5.poseNet(video);
	console.log("poseNet is Loaded!");

	poseNet.on('pose',gotPoses);

}

function gotPoses(results){
	if(results.length>0){
	    x = results[0].pose.nose.x;
	    y = results[0].pose.nose.y;
        console.log(x, y);
		sX = lerp(sX, x, 0.6);
		sY = lerp(sY, y, 0.6);
    }
    
}

function draw(){
	background("white");
	moveFood();
	drawSnake();
	drawFood();
	drawScore();
	if(checkCollision()){
		resetGame();
	}
}

function moveFood(){
    var distance=dist(sX, sY, fX, fY) 
    if (distance< size) {
        score += 10;
        fX = floor(random(width / size)) * size;
    	fY = floor(random(height / size)) * size;
    }
}
function drawSnake() {
	stroke("Darkgreen")
    fill("Darkgreen");
    rect(sX, sY, size, size);//it will draw the snake where our nose is.
}
function drawFood(){
	stroke("red");
	fill("red");
	ellipse(fX,fY,size);
}
function drawScore(){
	fill("red");
	textSize(25);
	text("Score : "+ score,295,20);

}

function checkCollision(){
	return (sX <= 0 || sY <= 0 || sX >= width || sY >= height);
}
 
function resetGame(){
	alert("Game Over!,Your score :"+score);
	sX=325;
	sY=240;
	fX=200;
	fY=150;
	score=0;
	size=20;
}