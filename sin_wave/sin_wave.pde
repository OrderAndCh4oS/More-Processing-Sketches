Point point = new Point(320, 0);
Point pointTwo = new Point(320, 0);
Point pointThree = new Point(320, 0);
Wave wave = new Wave(point, PI / 20, 3);
Wave waveTwo = new Wave(pointTwo, PI / 40, 3);
Wave waveThree = new Wave(pointThree, PI / 60, 3);

float distance = 620;
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

  void update() {
    a += v;
    float dX = 10 + (sin(a) * distance);
    p.setX(320 + dX - dX / 2);
    p.setY(p.getY() + s);
  }

  void draw() {
    strokeWeight(2);
    stroke(175, 140, 190);
    fill(175, 40, 90);
    line(p.getLastX(), p.getLastY(), p.getX(), p.getY());
  }
}

void setup() {
  size(640, 360);
  frameRate(24);
  background(50, 80, 155);
}

void draw() {
  wave.update();
  wave.draw();
  waveTwo.update();
  waveTwo.draw();
  waveThree.update();
  waveThree.draw();
  iterations++;
  saveFrame("f####.png");
  if (iterations == 150) exit();
}
