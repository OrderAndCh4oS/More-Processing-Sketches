
color bg = #000000;
color primary = #ffffff;
int count = 0;
Line l = new Line(30, 10);

void setup() {
  size(640, 360);
  frameRate(24);
  background(bg);
  fill(primary);
  strokeWeight(0);
}

void draw() {
  background(bg);
  pushMatrix();
  translate(320, 180);
  l.update();
  for (int i = 0; i < 128; i++) {
      rotate(map(i, 0, 128, 0, PI*2));
      l.draw();
  }
  popMatrix();
  count++;
  //saveFrame("f####.png");
  if (count == 250) exit();
}

class Point {
  float x = 0;
  float y = 0;
  float a = 0;
  
  Point(float x, float y) { //<>//
    this.x = x;
    this.y = y;
  }
  
  void update() {
    float dX = sin(a) * 6;
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
  int angle = 0;
  int tail = 0;
  int delay = 0;
  ArrayList<Point> points = new ArrayList<Point>();

  Line() {}

  Line(int maxTail) {
    this.maxTail = maxTail;
  }

  Line(int maxTail, int delay) {
    this.maxTail = maxTail;
    this.delay = delay;
  }

  void update() {
    iterations++;
    if (iterations < delay) return;
    tail++;
    for (Point point : points) {
      point.update();
    }
    if (tail < maxTail) points.add(new Point(0, 0));
  }

  void draw() {
    for (Point point : points) {
      point.draw();
    }
  }
}
