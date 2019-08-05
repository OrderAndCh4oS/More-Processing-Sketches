 //<>//
color bg = #000000;
color primary = #ffffff;
int count = 0;
Line l = new Line(30, 10, 3);
Line l2 = new Line(30, 10, 7);

void setup() {
  size(640, 360);
  frameRate(24);
  background(bg);
  fill(primary);
  strokeWeight(0);
  for (int i = 0; i < 80; i++) {
    l.update();
    l2.update();
  }
}

void draw() {
  background(bg);
  pushMatrix();
  translate(320, 180);
  l.update();
  l2.update();
  for (int i = 0; i < 32; i++) {
    pushMatrix();
    rotate(map(i, 0, 32, 0, PI*2));
    l.draw();
    popMatrix();
    pushMatrix();
    rotate(map(i, 0, 32, 0, PI*2) + (PI/32));
    l2.draw();
    popMatrix();
  }
  popMatrix();
  count++;
  saveFrame("f####.png");
  if (count == 82) exit();
}

class Point {
  float x;
  float y;
  float wave;
  float a = 0;

  Point(float x, float y, float wave) {
    this.x = x;
    this.y = y;
    this.wave = wave;
  }

  Point(float x, float y, float wave, float angle) {
    this.x = x;
    this.y = y;
    this.wave = wave;
    this.a = angle;
  }

  void update() {
    float dX = sin(a) * wave;
    this.x = dX - dX / 2;
    this.y += 4;
    this.a++;
  }

  void draw() {
    ellipse(x, y, 3, 3);
  }
}

class Line {
  int iterations = 0;
  int maxTail = 10;
  float angle = 0;
  int tail = 0;
  int delay = 0;
  float wave;
  ArrayList<Point> points = new ArrayList<Point>();

  Line(int maxTail, int delay, float wave, float angle) {
    this.maxTail = maxTail;
    this.delay = delay;
    this.wave = wave;
    this.angle = angle;
  }

  void update() {
    iterations++;
    tail++;
    for (Point point : points) {
      point.update();
    }
    if (tail < maxTail) points.add(new Point(0, 0, wave, angle));
    if (maxTail + delay < iterations) {
      tail = 0;
      iterations = 0;
    }
  }

  void draw() {
    for (Point point : points) {
      point.draw();
    }
  }
}
