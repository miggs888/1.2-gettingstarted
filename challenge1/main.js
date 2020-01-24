function setup() {
    createCanvas(800, 600);
  }
  
function draw() {
    if (mouseIsPressed){
      fill(115);
      stroke(255);
    } else {
      noFill();
      noStroke();
    }
    ellipse(mouseX, mouseY, 80, 80);
  }