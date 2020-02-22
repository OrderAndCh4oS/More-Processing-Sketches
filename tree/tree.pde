float theta;

void setup() {
  size(300, 200);
}

void draw() {
  background(255);
  //Pick an angle according to the mouse location.
  theta = 0.4;

  //The first branch starts at the bottom of the window.
  translate(width/2, height);
  stroke(0);
  branch(60, 6);
}

void branch(float len, float strokeWidth) {
  strokeWeight(strokeWidth);
  line(0, 0, 0, -len);
  translate(0, -len);
  float angleAdjust = random(0.05);
  //Each branch’s length shrinks by two-thirds.
  len *= 0.66;

  if (len > 2) {
    pushMatrix();
    rotate(theta + angleAdjust);
    //Subsequent calls to branch() include the length argument.
    branch(len, strokeWidth / 1.5);
    popMatrix();

    pushMatrix();
    rotate(-theta);
    branch(len, strokeWidth / 1.5);
    popMatrix();
  }
}
