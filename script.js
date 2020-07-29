// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          frameRate frameCount round*/

//Plant and Herbivore class methods and variables definied as global
/* global Plant*/
/* global Herbivore */

/* global Carnivore */

let grass, grasses;
let herbivores, herb;
let carnivores;
let time = 0;
let c = 0;
let h = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(90);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  frameRate(60);

  grasses = new Array(50);
  for (let i = 0; i < grasses.length; i++) {
    grasses[i] = new Plant();
  }

  herbivores = new Array(15);
  for (let i = 0; i < herbivores.length; i++) {
    herbivores[i] = new Herbivore();
  }

  carnivores = new Array(6);
  for (let i = 0; i < carnivores.length; i++) {
    carnivores[i] = new Carnivore();
  }

  // A = [0, 1, 2, 3, 4, 5];
  // B = [];
  // console.log(A);
  // for(let i = 0; i < A.length; i++) {
  //   if (A[i] >= 3) {
  //     B.push(i);
  //   }
  // }

  //   console.log(B);
  //   for (let j = B.length -1; j >= 0; j--){
  //     A.splice(B[j], 1);
  //   }

  //   console.log(A);
}

function draw() {
  // Set up
  background(10);
  fill(100);

  // Grasses

    for (let i = 0; i < grasses.length; i++) {
      grasses[i].draw();
      grasses[i].grow();
      grasses[i].decay();

      if (grasses[i].multiply()) {
        grasses.push(new Plant());
      }

      if (grasses[i].r == 0) {
        grasses.splice(i, 1);
      }
    }

  console.log(grasses[20].growth);
  console.log(grasses[20].r);

  // Herbivores
    let herbDeath = new Array();

    for ( h = 0; h < herbivores.length; h++) {
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

  //Carnivores
  let carnDeath = new Array();
  // global h is used so that it can be referenced in the carnivore.js file
  for (c = 0; c < carnivores.length; c++) {
    if (carnivores[c].death()) {
      //console.log(i);
      carnDeath.push(c);
    }
    // console.log(herbDeath);

    carnivores[c].draw();
    carnivores[c].move();
    carnivores[c].birth();


    carnivores[c].eating();
  }

  for (let i = carnDeath.length - 1; i >= 0; i--) {
    carnivores.splice(carnDeath[i], 1);
  }

  // Display the things

  fill(100);
  text(`Time: ${round(frameCount / 50)}`, 10, 20);

  //Debug Statements
  text(carnivores.length, 10, 40);
  //text(herbivores[30].age, 10, 60);
}
