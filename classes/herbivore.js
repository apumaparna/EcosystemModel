// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle */

let e = -1;
let f = -1;
let past = [];

function startHerbivores() {
  let herbDeath = new Array();

  for (h = 0; h < herbivores.length; h++) {
    if (herbivores[h].death()) {
      //console.log(i);
      herbDeath.push(h);
    }
    // console.log(herbDeath);

    herbivores[h].draw();
    herbivores[h].move();
    herbivores[h].birth();

    herbivores[h].eating();
  }

  for (let i = herbDeath.length - 1; i >= 0; i--) {
    herbivores.splice(herbDeath[i], 1);
  }
}

class Herbivore {
  constructor() {
    this.popRate;
    this.r = 20;
    this.x = random(width - this.r);
    this.y = random(height - this.r);
    this.xVel = random(-0.01, 0.01);
    this.yVel = random(-0.01, 0.01);
    this.col = 270;
    this.darkness = 80;
    //this.growth = true;
    this.age = 0;
    this.finalAge = random(15, 30);
    this.birthTime = frameCount / timeMultiplier;
    this.xvelrand = random(-0.02, 0.02);
    this.yvelrand = random(-0.02, 0.02);
    this.noiseScale = 0.02;
    this.lastEatingTime = frameCount / timeMultiplier;
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

  //Create more herbivores by population rate

  birth() {
    if (herbivores.length < 40) {
      console.log("gap");
      console.log(herbivores.length);
      for (let k = 0; k < herbivores.length; k++) {
        if (k != h && (!past.includes(k) && !past.includes(h))) {
          if (
            collideCircleCircle(
              herbivores[k].getX(),
              herbivores[k].getY(),
              herbivores[k].getRadius(),
              herbivores[h].getX(),
              herbivores[h].getY(),
              herbivores[h].getRadius()
            ) 
           
          ) {
            // console.log("conditions met")
            // console.log(past); 
            // console.log(k); 
            // console.log(h); 
            // console.log(past.includes(k))
            // console.log(past.includes(h))
            herbivores.push(new Herbivore());
            past.push(k);
            past.push(h);
            if (past.length > round(herbivores.length/5)) {
              past.splice(1, 1); 
              past.splice(0, 1)
            }
            // console.log(past); 
            // console.log(herbivores.length);
          }
        }
      }
    }
  }

  // Returns true or false for the disappearance/death of the herbivore
  death() {
    this.age = frameCount / timeMultiplier - this.birthTime;
    if (this.age >= this.finalAge) {
      //this.r = 0
      return true;
    } else if (
      frameCount / timeMultiplier - this.lastEatingTime >
      random(8, 18)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //TODO: use collide to simulate herbivores eating the plants/grass
  eating() {
    for (let i = 0; i < grasses.length; i++) {
      if (
        collideCircleCircle(
          this.x,
          this.y,
          this.r,
          grasses[i].getX(),
          grasses[i].getY(),
          grasses[i].getRadius()
        )
      ) {
        if (this.r < 50) {
          let sum =
            PI * this.r * this.r +
            PI * grasses[i].getRadius() * grasses[i].getRadius();
          this.r = sqrt(sum / PI);
        }
        grasses.splice(i, 1);
        this.lastEatingTime = frameCount / timeMultiplier;
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
