Point point = new Point(0, 160);
Point pointTwo = new Point(0, 160);
Point pointThree = new Point(0, 160);
Wave wave = new Wave(point, PI / 40, 3);
Wave waveTwo = new Wave(pointTwo, PI / 60, 3);
Wave waveThree = new Wave(pointThree, PI / 80, 3);

float distance = 340;
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

  void update(float tweak) {
    a += v * tweak;
    float dX = 10 + (sin(a) * distance);
    p.setY(180 + dX - dX / 2);
    p.setX(p.getX() + s);
  }

  void draw() {
    strokeWeight(0.5);
    stroke(6, 14, 59);
    line(p.getLastX(), p.getLastY(), p.getX(), p.getY());
    line(p.getLastX(), p.getLastY(), p.getX(), -p.getY());
  }
}

void setup() {
  size(640, 360);
  frameRate(24);
  background(220, 220, 230);
  for (int i = 0; i < 250; i++) {
    wave.update(0);
    wave.draw();
    waveTwo.update(0);
    waveTwo.draw();
    waveThree.update(0);
    waveThree.draw();
  }
}

void draw() {
  background(220, 220, 230);
  wave.p.setX(0);
  wave.p.setY(160);
  waveTwo.p.setX(0);
  waveTwo.p.setY(160);
  waveThree.p.setX(0);
  waveThree.p.setY(160);
  for (int i = 0; i < 250; i++) {
    wave.update(sin(iterations) * 500);
    wave.draw();
    waveTwo.update(sin(iterations) * 500);
    waveTwo.draw();
    waveThree.update(sin(iterations) * 500);
    waveThree.draw();
  }
  iterations++;
  saveFrame("f####.png");
  if (iterations == 500) exit();
}
