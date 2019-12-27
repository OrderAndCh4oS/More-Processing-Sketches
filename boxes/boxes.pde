color c1 = #05dd11;
color c2 = #1451d9;

float a = 10;
float x = 320;
float y = 3;

Box b = new Box(x, y, a);

class Box {
  float _x, _y, _a;  
  ArrayList<Box> boxes = new ArrayList<Box>();

  Box(float x, float y, float a) {
    _x = x;
    _y = y;
    _a = a;
  }

  void update() {
    _x = cos(150 * _y) + 10;
    _y = atan(100 * _x) + 104;
    _a = cos(_a * 20) / sin(_a * 20);
  }

  void draw() {
    rect(_x, _y, _a, _a);
  }
}

void setup() {
  frameRate(30);
  background(c2);
  size(640, 480);
}

void draw() {
  fill(c1);
  b.update();
  b.draw();
}
