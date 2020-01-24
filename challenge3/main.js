let question = prompt("Does the idea of infinite circles excite you?");
function setup() {
  createCanvas(800, 600);
  prompt("What color would you like the circle to be?")
}

function draw() {
  if (mouseIsPressed){
    fill(115);
    stroke(0);
  } else {
    fill(204, 226, 225, 60);
    stroke(0);
    strokeWeight(8);
  }
  ellipse(mouseX, mouseY, 80, 80);
}