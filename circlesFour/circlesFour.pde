/**
 * Grid of circles.  
 */

color hexBg = unhex("FFF2DDD5"); 
color hexOne = unhex("FFF24405"); 
color hexTwo = unhex("FF8C2703"); 
color hexThree = unhex("FF401201"); 
 
int x = 5;
int y = 5;

int spacing = 20;
int radius = 45;

int step = 0;
boolean scalingUp = true;

void setup() {
  size(640, 360);
  background(hexBg);

}

void draw() {
  step++;
  if (step % radius == 0) {
     scalingUp = !scalingUp;
  }
  background(hexBg);
  for(int i = -1; i < 65; i++) {
    for(int j = -1; j < 49; j++) {
       pushMatrix();
       translate((spacing / 4) + (spacing * i), (spacing / 4) + (spacing * j)); 
       makeEllipse(x, y, step);
       popMatrix();
    }
  }
  saveFrame("f####.png");
}

void makeEllipse(int x, int y, int scale) {
  int size;
  if (scalingUp) {
      noFill();
      stroke(hexOne);
      size = scale % radius; 
  } else {
      noFill();
      stroke(hexThree);
      size = radius - scale % radius; 
  }
  ellipse(x, y, size, size);
}
