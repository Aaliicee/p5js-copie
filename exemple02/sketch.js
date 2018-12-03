var song;

function preload(){
 sound1 = loadSound("07027158.wav")
}

function setup() {
  // put setup code here
    createCanvas(windowWidth,windowHeight);
    background(0);
    song.loop();
}

function draw() {
  // put drawing code here
    ellipse( width/2, height/2 ,50,50);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(0);
}