function setup() {
  createCanvas(950, 950);
}

function draw() {
  // bg
  rectGradient(0, 0, width, height, color(255, 255, 255), color(180, 100, 200));

  // arms 
  noStroke();
  fill(0, 0, 0);
  // right
  beginShape();
  vertex(567, 305);
  bezierVertex(750, 350, 925, 350, 925, 600);
  bezierVertex(725, 600, 725, 600, 725, 600);
  bezierVertex(710, 539, 713, 420, 710, 420);
  endShape();
  // left
  beginShape();
  vertex(374, 305);
  bezierVertex(250, 350, 25, 350, 25, 600);
  bezierVertex(225, 600, 25, 600, 225, 600);
  bezierVertex(240, 539, 240, 420, 240, 420);
  endShape();

  // hands
  radialGradient(125, 600, 200, 150, color(255, 204, 0), color(100, 20, 201));
  radialGradient(825, 600, 200, 150, color(255, 204, 0), color(100, 20, 201));
  
  // legs
  fill(0, 0, 0);
  //right
  beginShape();
  vertex(550, 600);
  bezierVertex(732, 677, 732, 677, 800, 825);
  bezierVertex(800, 800, 500, 710, 500, 825);
  bezierVertex(500, 710, 550, 600, 550, 600);
  endShape();
  //left
  beginShape();
  vertex(400, 600);
  bezierVertex(218, 677, 218, 677, 150, 825);
  bezierVertex(150, 800, 450, 710, 450, 825);
  bezierVertex(450, 710, 400, 600, 400, 600);
  endShape();

  // feet
  radialGradient(300, 825, 300, 200, color(200, 20, 20), color(25, 204, 0));
  radialGradient(650, 825, 300, 200, color(200, 20, 20), color(25, 204, 0));
  
  // body
  radialGradient(475, 500, 450, 350, color(255, 104, 100), color(55, 55, 255));

  // head shape
  radialGradient(475, 200, 300, 300, color(25, 224, 200), color(10, 100, 20));

  // eyes
  radialGradient(425, 150, 50, 100, color(50, 50, 50), color(0, 0, 0));
  radialGradient(425, 160, 25, 50, color(250, 204, 180), color(10, 20, 201));
  radialGradient(525, 150, 50, 100, color(50, 50, 50), color(0, 0, 0));
  radialGradient(525, 160, 25, 50, color(250, 204, 180), color(10, 20, 201));

  // mouth
  radialGradient(475, 275, 100, 25, color(130, 24, 170), color(255, 20, 111)); 

  // nose
  radialGradient(475, 225, 20, 20, color(100, 24, 30), color(225, 220, 111)); 

  // print cursor location (for easy position finding)
  console.log(mouseX, mouseY);
}

function rectGradient(x, y, w, h, c1, c2) {
  // for loop to linear interpolate between two colors for each row of pixels
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i); 
  }
}

function radialGradient(x, y, w, h, innerColor, outerColor) {
  noStroke();
  // for loop to linear interpolate between two colors radially
  for (let i = Math.max(w, h); i > 0; i--) {
    const step = i / Math.max(w, h);
    const colour = lerpColor(innerColor, outerColor, step);
    fill(colour);
    ellipse(x, y, step * w, step * h);
  }
}