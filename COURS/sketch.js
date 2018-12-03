var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound3Amp;
var sound4FFT;
var sound5FFT;

function preload() {
    sound1 = loadSound("../assets/07054042.wav");
    sound2 = loadSound("../assets/07074105.wav");
    sound3 = loadSound("../assets/07076041.wav");
    sound4 = loadSound("../assets/07076041.wav");
    sound5 = loadSound("../assets/07027158.wav"); /* exercice du 18/10*/
}

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);
    //sound1.loop();

    sound3Amp = new p5.Amplitude();
    sound3Amp.setInput(sound3);

    sound4FFT = new p5.FFT(0.8, 16)
    sound4FFT.setInput(sound4)

    sound5FFT = new p5.FFT(0.8, 1024)
    sound5FFT.setInput(sound5)
}

function draw() {
    createCanvas(windowWidth, windowHeight);

    background(0);

    /*
    ellipse(width / 2, height / 2, 50, 50);
    if (keyIsDown(65) == true) { //si c'est vrai cela va jouer 
         if(sound1.isplaying() == false) {
        sound1.play();
    }
    */

     playSound(sound3, 69)
    if (sound3.isPlaying() == true) {
        push()
        var lvl = sound3Amp.getLevel();
        var whitelvl = map(lvl, 0, 0.01, 0, 255)
        noStroke();
        fill(whitelvl)
        rectMode(CORNER); //quand c'est dans le coin faire ça 
        rect(0, 0, width, height)
        console.log(lvl);

        pop();
    }
    
    playSound(sound4, 82);
    if (sound4.isPlaying() == true) {
        push()
        sound4FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound4FFT.getEnergy("bass")

        push()
        fill(0, 200, 255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(0, 200, 255, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(0, 200, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }


    playSound(sound2, 90);
    if (sound2.isPlaying() == true) {
        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        rectMode(CENTER);
        fill(255, 220, 220);
        rect(0, 0, width * 0.5, height * 0.1);

        pop();
    }
    playSound(sound1, 65);
    if (sound1.isPlaying() == true) {
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width) //rayon  

        fill(255, 220, 0)
        ellipse(width * 0.5, height * 0.5, radius, radius);

        pop();
    }

    playSound(sound5, 84)
    if (sound5.isPlaying() == true) {
        push()
        sound5FFT.analyze();
        rectMode(CENTER);
        var waveform = sound5FFT.waveform();
        noFill();
        beginShape();
        stroke(150, 255, 225); // waveform is mint
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
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
    background(0);
}
