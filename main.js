function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose',gotPoses);

	instializeInSetup(mario);
}

function draw() {
	game()
}

function modalLoaded() {
	console.log('Modal Loaded !');
}

function gotPoses(results) {
	if(results.length > 0);
	{
		console.log(results);
		noseX = [0].poses.nose.x;
		noseY = [0].poses.nose.y;
	}
}