color bg = #8247B3;
color waveColour = #FFC973;
float distance = 150;
int iterations = 0;

class Point {
  float x, y, lastX, lastY;
  Point (float x, float y) {
    this.x = x;
    this.y = y;
  }

  float getY() {
    return y;
  }

  float getX() {
    return x;
  }

  void setY(float y) {
    this.lastY = this.y;
    this.y = y;
  }

  void setX(float x) {
    this.lastX = this.x;
    this.x = x;
  }

  float getLastY() {
    return lastY;
  }

  float getLastX() {
    return lastX;
  }
  
  void draw() {
    fill(#69EBFF);
    ellipse(x, y, 3.0, 3.0);
  }
}

class Wave {
  Point p;
  float a;
  float v;
  float s;

  Wave(Point point, float value, float speed) {
    this.p = point;
    this.v = value;
    this.s = speed;
    this.a = PI;
  }

  void update(float modifier) {
    a += v + modifier;
    p.setY(10 + (sin(a) * distance));
    p.setX(p.getX() + s);
  }

  void draw() {
    strokeWeight(1.2);
    stroke(waveColour);
    line(p.getLastX(), p.getLastY(), p.getX(), p.getY());
    p.draw();
  }
}

void setup() {
  size(640, 360);
  frameRate(24);
  background(bg);
}

void draw() {
  background(bg);
  for (int i = 0; i < 12; i++) {
    pushMatrix();
    translate(320, 180);
    fill(0, 0, 0);
    rotate((PI*2)/12 * i);
    Point point = new Point(0, 0);
    Wave wave = new Wave(point, 1, 25);
    for (int j = 0; j < 10; j++) {      
      wave.update(sin((float) iterations / 20));
      wave.draw();
    }
    popMatrix();
  }
  iterations++;
  saveFrame("f####.png");
  if (iterations == 126) exit();
}
