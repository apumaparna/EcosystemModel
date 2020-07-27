// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          createVector round frameCount pow log*/

class Plant {
  constructor() {
    this.growthRate = 0.1;
    this.popRate;
    this.decayRate;
    this.x = random(width);
    this.y = random(height);
    this.pos = createVector(this.x, this.y);
    this.r = 1;
    this.col = random(90, 120);
    this.darkness = random(50, 80);
    this.growth = true;
  }

  //TODO: have the dots grow in size
  grow() {
    if (this.growth) {
      if (this.r < round(random(15, 20))) {
        this.r += this.growthRate;
      } else {
        this.growth = false;
      }
    }
  }

  //TODO: create more plants by population rate
  multiply() {
    let num = random(0, 1);
    //num = random(0, 1);
    if (num < 0.01) {
      return true;
    } else {
      return false;
    }
  }

  // TODO: after a certain time make plants shrink & disappear (or by a decay rate)
  decay() {
    if (!this.growth) {
      if (this.r > 0) {
        // decayRate = -ln(current/initial) / time
        // decayRate/dt = - ln(current/initial)/ (time**2)
        this.decayRate = log(grasses.length / 50) / (frameCount / 50) ** 2;
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
