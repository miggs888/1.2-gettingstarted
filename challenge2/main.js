function setup() {
    createCanvas(800, 600);
  }
  
function draw() {
    if (mouseIsPressed){
      fill(115);
      stroke(255);
    } else {
      fill(204, 226, 225, 60);
      strokeWeight(8);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }