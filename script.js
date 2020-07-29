// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW, triangle 
          frameRate frameCount round startPlants startHerbivores startCarnivores
          createGui abs*/

//Plant and Herbivore class methods and variables definied as global
/* global Plant*/
/* global Herbivore */

/* global Carnivore */

let grasses;
let herbivores;
let carnivores;
let time = 0;
let c = 0;
let h = 0;

//GUI Variables
//herbivore starting value
var herbivoreCount = 7;
var herbMin = 1;
var herbMax = 20;

// carnivore starting value
var carnivoreCount = 6;
var carnMin = 1;
var carnMax = 20;

//plant starting value
var grassCount = 50;
var grassMin = 20;
var grassMax = 4000;

let lastHerb = herbivoreCount;
let lastCarn = carnivoreCount;
let lastGrass = grassCount;

var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(90);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  frameRate(60);

  grasses = [];
  for (let i = 0; i < grassCount; i++) {
    grasses.push(new Plant());
  }
  
  herbivores = []; 
  for (let i = 0; i < herbivoreCount; i++) {
    herbivores.push(new Herbivore()); 
  }
  
  carnivores = []; 
  for(let i = 0; i < carnivoreCount; i++) {
    carnivores.push(new Carnivore()); 
  }

  gui = createGui("slider-range-1");
  gui.addGlobals("herbivoreCount", "carnivoreCount", "grassCount");

  // only call draw when then gui is changed
  //noLoop();
}

function draw() {
  // Set up
  background(10);
  // Grasses
  startPlants();

  // Herbivores
  // startHerbivores();

  //Carnivores
  startCarnivores();

  // Display the things

  fill(100);
  text(`Time: ${round(frameCount / 40)}`, 10, 20);

  //Debug Statements
  text(`Grass: ${grasses.length}`, 10, 40);
  text(`Herbivores: ${herbivores.length}`, 10, 60);
  text(`Carnivores: ${carnivores.length}`, 10, 80);
  //text(herbivores[30].age, 10, 60);
  
  // console.log("new")
  // console.log(herbivoreCount); 
  // console.log(lastHerb); 
  // console.log(herbivores.length); 
  // if (lastHerb != herbivoreCount) {
  //   if (herbivoreCount > herbivores.length) {
  //     console.log("greater"); 
  //     //TODO: add that many herbivores
  //     let herbDiff = herbivores.length - herbivoreCount;
  //     for (let i = 0; i < herbDiff; i++) {
  //       herbivores.push(new Herbivore());
  //     }
  //     console.log(herbivores.length)
  //   } else if (herbivoreCount < herbivores.length) {
  //     console.log("lesser"); 
  //     let herbDiff = herbivoreCount - herbivores.length;
  //     for (let i = 0; i < herbDiff; i++) {
  //       herbivores.splice(herbivores.length - 1, 1);
  //     } 
  //   } 
  //   // lastHerb = herbivoreCount;
  // } else {
  //   startHerbivores(); 
  // }


// console.log("new")
// console.log(carnivoreCount); 
// console.log(lastCarn); 
// console.log(carnivores.length);
if (lastCarn != carnivoreCount) {
  let carnDiff = abs(carnivores.length - carnivoreCount);
    if (carnivoreCount > carnivores.length) {
      console.log("greater"); 
      //TODO: add that many herbivores
      console.log(carnDiff); 
      for (let i = 0; i < carnDiff; i++) {
        carnivores.push(new Carnivore());
      }
      console.log(carnivores.length)
    } else if (carnivoreCount < carnivores.length) {
      console.log("lesser"); 
      for (let i = 0; i < carnDiff; i++) {
        carnivores.splice(carnivores.length - 1, 1);
      } 
    } 
    lastCarn = carnivoreCount;
  } else {
    startHerbivores(); 
  }
}



// function mousePressed() {
//   //check if herbivore slider and array count are same

//   if (herbivoreCount > herbivores.length) {
//     //TODO: add that many herbivores
//     let herbDiff = herbivores.length - herbivoreCount;
//     for (let i = 0; i < herbDiff; i++) {
//       herbivores.push(new Herbivore());
//     }
//   } else if (herbivoreCount < herbivores.length) {
//     let herbDiff = herbivoreCount - herbivores.length;
//     for (let i = 0; i < herbDiff; i++) {
//       herbivores.splice(herbivores.length - 1, 1);
//     }
//   }

//check if carnivore slider and array count are same
//   if(){

//   }

//check if plant slider and array count are same
//   if (){

//   }
// }
