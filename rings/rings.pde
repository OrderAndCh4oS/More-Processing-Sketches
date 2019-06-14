/**
 * Tower of hoops
 */

int width = 640;
int height = 360;

float x = 0;
float y = 0;

int centerX = width / 2;
int centerY = height / 2;

float radius = 250;
int count = 20;
float distance = 1;

boolean scalingUp = true;

void setup() {
  size(640, 360);
  background(40, 75, 95);
  frameRate(30);
}

void draw() {
  background(40, 75, 95);
  if (distance > 360 || distance < 1) {
     scalingUp = !scalingUp;
  } 
  if (scalingUp) {
    distance += 4;
  } else {
    distance -= 4;
  }
  translate(centerX, centerY); 
  for (int i = 0; i < count; i++) {
     y = (distance / 2) - ((distance / count) * (i + 1));
    makeEllipse(x, y);
  }
  saveFrame();
}

void makeEllipse(float x, float y) {
  float maxDistance = 360;
  float percentD = (distance / 2 - abs(y)) / (distance / 2);
  float elastic = (distance / maxDistance) * (0.7 * percentD);
  float size = radius - (radius * percentD) * elastic;
  println(percentD);
  println(elastic);
  println("++++++++++");
  noFill();
  stroke(252, 143, 104);
  ellipse(x, y, size, size / 5);
}
