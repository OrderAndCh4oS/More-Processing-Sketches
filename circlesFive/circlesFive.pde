/**
 * Grid of circles.  
 */

int count = 0;
 
color hexBg = unhex("FFF24405"); 

color hexOne = unhex("FFF2DDD5"); 
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
  frameRate(30);
}

void draw() {
  step++;
  if (step % radius == 0) {
     scalingUp = !scalingUp;
     count++;
     if (count == 2) exit();
  }
  background(hexBg);
  for(int i = -1; i < 65; i++) {
    for(int j = -1; j < 45; j++) {
       pushMatrix();
       translate((spacing / 4) + (spacing * i), (spacing / 4) + (spacing * j)); 
       float scale = step;
       color strokeColor = hexOne;
       if (i % 2 == 0 && j % 2 == 0) {
         scale = step / 2;
         strokeColor = hexThree;
       }
       makeEllipse(x, y, scale, strokeColor);
       popMatrix();
    }
  }
  saveFrame("f####.png");
}

void makeEllipse(int x, int y, float scale, color strokeColour) {
  float size;
  noFill();
  stroke(strokeColour);
  if (scalingUp) {
      size = scale % radius; 
  } else {
      size = radius - scale % radius; 
  }
  ellipse(x, y, size, size);
}
