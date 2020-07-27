// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle */

//Plant Class methods and variables
/* global Plant*/


let grass, grasses

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(90);
  noStroke(); 
  colorMode(HSB, 360, 100, 100);
  
  grasses = new Array(50);
  for(let i = 0; i < grasses.length; i++){
    grasses[i] = new Plant();
  }
  
  
}


function draw(){
  background(10);
  for(let i = 0; i < grasses.length; i++){
    //grasses[i].draw();
    grasses[i].grow(); 
    grasses[i].decay();
    grasses[i].draw();
    
    if(grasses[i].r < 0){
      grasses.splice(i, 1); 
      //grasses[i].multiply();
    }
  }
  
}
