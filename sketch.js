var database;
var gamestate;

function preload() {
	bgImg = loadImage("assets/Background.PNG");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	database = firebase.database();


	form = new Form();
	form.display()
	mode = new Mode();

}


function draw() {
	background(bgImg);

	if(mode.singlePlayerButtonClicked === true){
		mode.update(0) //single player
	}

	if(mode.multiPlayerButtonClicked === true){
		mode.update(1) // multiplayer
	}

	drawSprites();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
