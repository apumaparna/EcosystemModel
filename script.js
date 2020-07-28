// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          frameRate frameCount round*/

//Plant Class methods and variables
/* global Plant*/
/* global Herbivore */

let grass, grasses;
let herbivores, herb; 
let time = 0;
let A; 
let B;

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
  
  herbivores = new Array(50); 
  for (let i = 0; i < herbivores.length; i++) {
    herbivores[i] = new Herbivore(); 
  }
  
  herb = new Herbivore(); 
  
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
  
//   for (let i = 0; i < grasses.length; i++) {
//     //grasses[i].draw();
//     grasses[i].grow();
//     grasses[i].decay();
//     grasses[i].draw();

//     if (grasses[i].multiply()) {
//       grasses.push(new Plant());
//     }

//     if (grasses[i].r < 0) {
//       grasses.splice(i, 1);
//     }
//   }
  
  
  // Herbivores 
  
  // console.log(herb.death()); 
  let herbDeath = new Array(); 
  
  for (let i = 0; i < herbivores.length; i++) {
    
    if (herbivores[i].death()) { 
      //console.log(i); 
      herbDeath.push(i);  
    }
    console.log(herbDeath);
    
      herbivores[i].draw(); 
      herbivores[i].move();
    // if (herbivores[i].birth()) {
    //    herbivores.push(new Herbivore());
    // }
  }
  
  for (let i = herbDeath.length - 1; i >= 0; i--) {
    herbivores.splice(herbDeath[i],1); 
  }


  // Display the things 
  
  fill(100);
  text(`Time: ${round(frameCount / 50)}`, 10, 20);
  
  //Debug Statements
  text(herbivores.length, 10, 40); 
  //text(herbivores[30].age, 10, 60);
}
