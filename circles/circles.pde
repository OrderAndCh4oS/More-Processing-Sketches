/**
 * Grid of circles.  
 */
 
int x = 5;
int y = 5;

int spacing = 20;
int radius = 30;

int step = 0;
boolean scalingUp = true;

void setup() {
  size(640, 360);
  background(0, 105, 124);

}

void draw() {
  step++;
  if (step % radius == 0) {
     scalingUp = !scalingUp;
  }
  background(0, 105, 124);
  for(int i = 0; i < 64; i++) {
    for(int j = 0; j < 48; j++) {
       pushMatrix();
       translate((spacing / 4) + (spacing * i), (spacing / 4) + (spacing * j)); 
       makeEllipse(x, y, step);
       popMatrix();
    }
  }
}

void makeEllipse(int x, int y, int scale) {
  fill(255, 83, 63);
  stroke(255, 83, 63);
  int size;
  if (scalingUp) {
      fill(255, 83, 63);
      stroke(255, 83, 63);
      size = scale % radius; 
  } else {
      fill(134, 162, 140);
      stroke(134, 162, 140);
      size = radius - scale % radius; 
  }
  ellipse(x, y, size, size);
}
