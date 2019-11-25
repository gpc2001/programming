var grassImage;
var grassY = 500;

var sunX = 100;
var moonX = 100;

var transparency = 0

function preload() {
    grassImage = loadImage('grass.png');
}

function setup() {
createCanvas(800, 800);
}

function draw() {
    background('lightblue');

    
    noStroke();
    fill(255, 0, 0, transparency)
    textSize(30)
    text('What a beautiful day', 100, 100);

    
    if (mouseX > 400) {
        background('lightblue');
        background(0,0,0,50);
        
        noStroke();
        fill(255, 0, 0, transparency)
        text('What a beautiful night', 100, 100);

        
    }
    
    fill('yellow');
    ellipse(sunX, 100, 100, 100);
    sunX++;
    
    image(grassImage, 0, grassY, width);
    grassY = grassY - 1;
    
    if(grassY < 400) {
        grassY = 400;
    }
    
    
}

function mousePressed(){
    
    
    transparency += 10

}

