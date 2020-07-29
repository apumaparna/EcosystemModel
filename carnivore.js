// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          createVector round frameCount pow log noise PI sqrt indexOf*/

let a = -1;
let b = -1;

class Carnivore {
  constructor() {
    this.popRate;
    this.r = 30;
    this.x = random(width - this.r);
    this.y = random(height - this.r);
    this.xVel = random(-0.01, 0.01);
    this.yVel = random(-0.01, 0.01);
    this.col = 0;
    this.darkness = 80;
    //this.growth = true;
    this.age = 0;
    this.finalAge = random(15, 30);
    this.birthTime = frameCount / 50;
    this.xvelrand = random(-0.02, 0.02);
    this.yvelrand = random(-0.02, 0.02);
    this.noiseScale = 0.02;
    this.lastEatingTime = frameCount / 50;
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
    if (carnivores.length < 10) {
      for (let j = 0; j < carnivores.length; j++) {
        if (j != c) {
          if (
            collideCircleCircle(
              carnivores[j].getX(),
              carnivores[j].getY(),
              carnivores[j].getRadius(),
              carnivores[c].getX(),
              carnivores[c].getY(),
              carnivores[c].getRadius()
            ) &&
            (a != j && a != c && (b != c && b != j))
          ) {
            carnivores.push(new Carnivore());
            a = c;
            b = j;
          }
        }
      }
    }
  }

  // Returns true or false for the disappearance/death of the herbivore
  death() {
    this.age = frameCount / 50 - this.birthTime;
    if (this.age >= this.finalAge) {
      //this.r = 0
      return true;
    } else if (frameCount / 50 - this.lastEatingTime > random(8,18)) {
      return true;
    } else {
      return false;
    }
  }

  //TODO: use collide to simulate herbivores eating the plants/grass
  eating() {
    for (let i = 0; i < herbivores.length; i++) {
      if (
        collideCircleCircle(
          this.x,
          this.y,
          this.r,
          herbivores[i].getX(),
          herbivores[i].getY(),
          herbivores[i].getRadius()
        )
      ) {
        if (this.r < 70) {
          let sum =
            PI * this.r * this.r +
            PI * herbivores[i].getRadius() * herbivores[i].getRadius();
          this.r = sqrt(sum / PI);
        }
        herbivores.splice(i, 1);
        this.lastEatingTime = frameCount / 50;
      }
    }
  }

  //draw the dot/herbivore using an ellipse
  draw() {
    let xNoiseVal = noise(this.x * this.noiseScale);
    let yNoiseVal = noise(this.y * this.noiseScale);
    noStroke;
    fill(this.col, 80, this.darkness);
    ellipse(this.x + xNoiseVal, this.y + yNoiseVal * 30, this.r);
  }
}
