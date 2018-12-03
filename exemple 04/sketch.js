var sound8;
var sound9;

function preload() {
    sound8 = loadSound("../assets/clic.mp3");
    sound9 = loadSound("../assets/pschit.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    playSound(sound8, 65)
    if (sound8.isPlaying() == true) {
        fill(175, 175, 0)
        ellipse(width / 3.5, height / 2, 200, 200);
        ellipse(width / 1.5, height / 2, 200, 200);
    }

    playSound(sound9, 69)
    if (sound9.isPlaying() == true) {
        fill(255, 0, 0);
        rect(1390, 20, 55, 700);
        rect(1050, 20, 55, 700);
        rect(720, 20, 55, 700);
        rect(390, 20, 55, 700);
        rect(60, 20, 55, 700);
        
    }
}

function playSound(sound, keyId) { //pour eviter de faire trop de ligne
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
