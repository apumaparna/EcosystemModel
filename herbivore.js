// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          createVector round frameCount pow log*/

class Herbivore {
  constructor() {
    this.popRate;
    // this.decayRate;
    this.x = random(width);
    this.y = random(height);
    this.xVel = random(-0.1, 0.1);
    this.yVel = random(-0.1, 0.1);
    // this.pos = createVector(this.x, this.y);
    // this.vel = createVector(this.xVel, this.yVel);
    this.r = 30;
    this.col = 270;
    this.darkness = 80;
    this.growth = true;
    this.age = 0;
    this.finalAge = random(5, 15);
    this.birthTime = frameCount / 50;
    this.xvelrand = random(-0.2, 0.2); 
    this.yvelrand = random(-0.2, 0.2);
  }

  //TODO: move around the screen
  move() {
    this.x += this.xVel;
    this.xVel += this.xvelrand

    if (this.x > width - this.r || this.x < 0) {
      this.xVel = -this.xVel;
    }

    this.y += this.yVel;
    this.yVel += this.yvelrand

    if (this.y > height - this.r || this.y < 0) {
      this.yVel = -this.yVel;
    }
  }

  //TODO: create more herbivores by population rate
  birth() {
    let num = random(0, 1);
    //num = random(0, 1);
    if (num < 0.01) {
      return true;
    } else {
      return false;
    }
  }

  // TODO: the disappearance/death of the herbivore
  death() {
    this.age = frameCount / 50 - this.birthTime;
    if (this.age >= this.finalAge) {
      this.r = 0
      return true;
    } else {
      return false;
    }

    // let num = random(0, 1);
    // //num = random(0, 1);
    // if (num < 0.02) {
    //   return true;
    // } else {
    //   return false;
    // }

    // if (!this.growth) {
    //   if (this.r > 0) {
    //     // decayRate = -ln(current/initial) / time
    //     // decayRate/dt = - ln(current/initial)/ (time**2)
    //     this.decayRate = log(herbivores.length / 50) / (frameCount / 50) ** 2;
    //     this.r -= this.decayRate;
    //     console.log(this.r);
    //   }
    // }
  }

  eating() {}

  // TODO: draw the dot/herbivore using an ellipse
  draw() {
    noStroke;
    fill(this.col, 50, this.darkness);
    ellipse(this.x, this.y, this.r);
  }
}
