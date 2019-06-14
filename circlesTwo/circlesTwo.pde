/**
 * Grid of circles.  
 */

int loop = 0;
 
int x = 5;
int y = 5;

int spacing = 20;
int radius = 30;

int step = 0;
boolean scalingUp = true;

color red = color(204, 102, 0);
color green = color(134, 162, 140);
color blue = color(0, 105, 124);

color[] colourCycle = {blue, red, green};

int colourKey = 0;

int getColour() {
   return colourCycle[colourKey % 3];
}

color getColour(int k) {
   return colourCycle[(colourKey + k) % 3];
}

void incrementColourKey() {
   colourKey += 1; 
}

void setup() {
  size(640, 360);
  background(255, 255, 255);
}

void draw() {
  step++;
  if (step % radius == 0) {
     scalingUp = !scalingUp;
     incrementColourKey(); 
     loop++;
     if (loop == 3) exit();
  }
  background(255, 255, 255);
  for(int i = 0; i < 64; i++) {
    for(int j = 0; j < 48; j++) {
       pushMatrix();
       translate((spacing / 4) + (spacing * i), (spacing / 4) + (spacing * j)); 
       makeEllipse(x, y, step);
       makeEllipse(x, y, step / 2);
       popMatrix();
    }
  }
  saveFrame();
}

void makeEllipse(int x, int y, int scale) {
  int size;
  fill(0, 0, 0, 0);
  stroke(getColour(1));
  size = scale % radius; 
  ellipse(x, y, size, size);
}
