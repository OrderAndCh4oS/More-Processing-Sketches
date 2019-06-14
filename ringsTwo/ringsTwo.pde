/**
 * Tower of hoops
 */

color bc = color(187, 159, 156);
color ringOne = color(202, 68, 79);
color ringTwo = color(253, 169, 133);

int width = 640;
int height = 360;

float x = 0;
float y = 0;

int centerX = width / 2;
int centerY = height / 2;

float radius = 250;
int count = 21;
float distance = 1;

boolean scalingUp = true;

int loop = 0;

void setup() {
  size(640, 360);
  background(40, 75, 95);
  frameRate(30);
}

void draw() {
  background(bc);
  if (distance > 360 || distance < 1) {
     scalingUp = !scalingUp;
     loop++;
     if (loop == 2) exit();
  } 
  if (scalingUp) {
    distance += 6;
  } else {
    distance -= 6;
  }
  
  translate(centerX, centerY); 
  makeRings();
  saveFrame();
}

void makeRings() {
 for (int i = 0; i < count; i++) {
     y = (distance / 2) - ((distance / count) * (i + 1));
    makeEllipse(x, y, i);
  } 
}

void makeEllipse(float x, float y, int i) {
  float maxDistance = 360;
  float percentD = (distance / 2 - abs(y)) / (distance / 2);
  float elastic = (distance / maxDistance) * (0.5 - percentD);
  float size = radius - (radius * percentD) - elastic;
  noFill();
  strokeWeight(4);
  if (i % 2 == 0) stroke(ringOne);
  if (i % 2 != 0) stroke(ringTwo);
  ellipse(x, y, size, size / 5);
}
