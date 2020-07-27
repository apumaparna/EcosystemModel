// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          createVector */

class Plant {
  constructor() {
    this.growthRate = 0.1;
    this.popRate;
    this.decayRate = 0.05;
    this.x = random(width);
    this.y = random(height);
    this.pos = createVector(this.x, this.y);
    this.r = 20;
    this.col = random(90, 120);
    this.darkness = random(50, 80);
    this.growth = true;
  }

  //TODO: have the dots grow in size
  grow() {
    if (this.growth) {
      if (this.r < 30) {
        this.r += this.growthRate;
      } else {
        this.growth = false;
      }
    }
  }

  //TODO: create more plants by population rate
  multiply() {}

  // TODO: after a certain time make plants shrink & disappear (or by a decay rate)
  decay() {
    if (!this.growth) {
      //inital*e^(this.decay*t)
      if (this.r > 0) {
        this.r -= this.decayRate;
        console.log(this.r);
      }
    }
  }

  // TODO: draw the dot/plant using an ellipse
  draw() {
    noStroke;
    fill(this.col, 80, this.darkness);
    ellipse(this.x, this.y, this.r);
  }
}
