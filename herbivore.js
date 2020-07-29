// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          createVector round frameCount pow log noise PI sqrt */

class Herbivore {
  constructor() {
    this.popRate;
    this.x = random(width);
    this.y = random(height);
    this.xVel = random(-0.01, 0.01);
    this.yVel = random(-0.01, 0.01);
    this.r = 30;
    this.col = 270;
    this.darkness = 80;
    //this.growth = true;
    this.age = 0;
    this.finalAge = random(5, 15);
    this.birthTime = frameCount / 50;
    this.xvelrand = random(-0.02, 0.02);
    this.yvelrand = random(-0.02, 0.02);
    this.noiseScale = 0.02;
  }
  
  getX(){
    return this.x;
  }
  
  getY(){
    return this.y;
  }

  getRadius(){
    return this.r;
  }

  //Move the herbivores around the screen
  move() {
    this.x += this.xVel;
    this.xVel += this.xvelrand;

    if (this.x > width - this.r || this.x < 0) {
      this.xVel = -this.xVel;
    }

    this.y += this.yVel;
    this.yVel += this.yvelrand;

    if (this.y > height - this.r || this.y < 0) {
      this.yVel = -this.yVel;
    }
  }

  //TODO: create more herbivores by population rate
  birth() {
    let num = random(0, 1);
    //num = random(0, 1);
    if (num < 0.002) {
      return true;
    } else {
      return false;
    }
  }

  // Returns true or false for the disappearance/death of the herbivore
  death() {
    this.age = frameCount / 50 - this.birthTime;
    if (this.age >= this.finalAge) {
      //this.r = 0
      return true;
    } else {
      return false;
    }
  }

  //TODO: use collide to simulate herbivores eating the plants/grass
  eating() {
    for (let i = 0; i < grasses.length; i++) {
      if (collideCircleCircle(this.x,this.y, this.r, grasses[i].getX(), grasses[i].getY(),grasses[i].getRadius())) {
        if (this.r < 50) {
        let sum = (PI * this.r * this.r) + (PI * grasses[i].getRadius() * grasses[i].getRadius());
        this.r = sqrt(sum/PI);
        }
        grasses.splice(i,1);
      }
    }
  }

  //draw the dot/herbivore using an ellipse
  draw() {
    let xNoiseVal = noise(this.x * this.noiseScale);
    let yNoiseVal = noise(this.y * this.noiseScale);
    noStroke;
    fill(this.col, 50, this.darkness);
    ellipse(this.x + xNoiseVal, this.y + yNoiseVal * 30, this.r);
  }
}
