let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;
let starArray = [];
let bg1 = 20;
let mySound;
let x = 800;
let img;
let martin;

function preload() {
  mySound = loadSound("son.mp3");
  img = loadImage("horse.gif");
  martin = loadImage("martin.png");
}

function setup() {
  createCanvas(w, h);
  colorMode(HSB, 360);
  background(200, 100, 20);
  // augmenter les deux derniers nombres pour avoir un ciel plus claire
  frameRate(4);
  // mySound.play();
  mySound.play();
}

function draw() {
  if (count < 200)
  { 
    let star = new Star();
    star.create();
    starArray.push(star);
    // console.log(star_array.length);
    count += 1;
  } else {
    colorMode(HSB, 360);
    background(200, 100, bg1 += 3);
    starArray.forEach(function(item) {
      item.move();
      item.create();
      if (changeBg() == true) {
        // colorMode(HSB, 360);
        // count += 1;
        background(244, 130, 33);
        x -= 0.1;
        image(img, x, 300);
        image(martin, -50, 200);
        /* if (count > 1000) {
          
        }
        */
      }
    });
  }
  /*
  if (bg1 > 250) {
      let cloud = new Cloud();
      cloud.create();
      count += 1;
   }
   */
}

function changeBg() {
  if (bg1 > 250) {
    return true
  } else {
    return false;
  }
}
