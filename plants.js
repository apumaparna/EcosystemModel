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

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getRadius() {
    return this.r;
  }

  //have the dots grow in size
  grow() {
    if (this.growth) {
      if (this.r <= round(random(15, 20))) {
        this.r += this.growthRate;
      } else {
        this.growth = false;
      }
    }
  }

  //Returns true or false to control plant multiplication rate
  multiply() {
    let num = random(0, 1);
    //num = random(0, 1);
    if (grasses.length < 15000) {
      if (num < 0.009) {
        return true;
      } else {
        return false;
      }
    } else {
      this.growth = false; 
    }
  }

  // After a certain time make plants shrink & disappear (or by a decay rate)
  decay() {
    if (!this.growth) {
      if (this.r > 0) {
        // decayRate = -ln(current/initial) / time
        // decayRate/dt = - ln(current/initial)/ (time**2)
        this.decayRate = log(grasses.length / 50) / (frameCount / 50) ** 2;
        this.r -= 4 * this.decayRate;
        if (this.r < 0.001){
          this.r = 0;
        }
        //console.log(this.r);
      }
    }
  }

  // Draws the dot/plant using an ellipse
  draw() {
    noStroke();
    //stroke(100);
    fill(this.col, 80, this.darkness);
    ellipse(this.x, this.y, this.r);
  }
}
