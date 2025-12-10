let sw = 1;
let speed = 1;
let x, y, px, py = 0;
let brush = 0;

let mouseXR = 0;
let mouseYR = 0;

let button;

var odraw = function(xval, yval) {
  mouseXR = xval;
  mouseYR = yval;
}

function setup() {
  let canvas = createCanvas(screen.width, screen.height);
  background(255);
  // stroke(164, 244, 242);
  stroke(255, 173, 173);
  brush = random(1);
  button = createButton('clear canvas');
  button.mousePressed(clearCanvas);
  button.class('btn');
}


function mousePressed() {
  let chooseColor = random(7);
  if (chooseColor < 1) {
  //   stroke(160, 196, 255);
  // } else if (chooseColor < 2) {
  //   stroke(255, 214, 224);
  // } else if (chooseColor < 3) {
  //   stroke(255, 173, 173);
  // } else if (chooseColor < 4) {
  //   stroke(255, 239, 159);
  // } else if (chooseColor < 5) {
  //   stroke(253, 255, 182);
  // } else if (chooseColor < 6) {
  //   stroke(193, 251, 164);
  // } else
  //   stroke(123, 241, 168);
  stroke(255, 214, 165);
} else if (chooseColor < 2) {
  stroke(253, 255, 182);
} else if (chooseColor < 3) {
  stroke(202, 255, 191);
} else if (chooseColor < 4) {
  stroke(155, 255, 220);
} else if (chooseColor < 5) {
  stroke(160, 196, 255);
} else if (chooseColor < 6) {
  stroke(189, 178, 255);
} else if (chooseColor < 6) {
  stroke(255, 198, 255);
} else   
  stroke(255, 173, 173);

}

function draw() {
  x = mouseX;
  y = mouseY;
  brush = 0.8;
  speed = dist(px, py, x, y);
  if (brush < 0.5) {
    sw = speed / 10;
    sw = constrain(sw, 5, 15);
  } else {
    sw = 100 / speed;
    sw = constrain(sw, 3, 25);
  }
  //background(0,5)

  strokeWeight(sw);
  line(px, py, x, y);

  px = mouseX;
  py = mouseY;
}

function clearCanvas() {
  background(255);
}
