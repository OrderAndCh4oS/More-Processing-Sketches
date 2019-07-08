
color bg = #000000;
color line = #ffffff;
ArrayList<Line> lines = new ArrayList<Line>();
int count = 0;

void setup() {
  size(640, 360);
  frameRate(24);
  background(bg);
  fill(line);
  strokeWeight(0);
  for (int i = 0; i < 15; i++) {
    lines.add(new Line(25, i * 35));
  }
  for (int i = 0; i < 34; i++) {
    for (Line line : lines) {
      line.update();
    }
  }
}

void draw() {
  background(bg);
  for (Line line : lines) {
    line.update();
  }
  for (int i = 0; i < 128; i++) {
    pushMatrix();
    translate(320, 180);
    rotate(map(i, 0, 128, 0, PI*2));
    for (Line line : lines) {
      line.draw();
    }
    popMatrix();
  }
  count++;
  saveFrame("f####.png");
  if (count == 71) exit();
}

class Point {
  int x = 0;
  int y = 0;
  Point(int x, int y) { //<>//
    this.x = x;
    this.y = y;
  }

  void update() {
    x += 5;
    y += 15;
  }

  void draw() {
    ellipse(x, y, 3, 3);
  }
}

class Line {
  int iterations = 0;
  int maxTail = 10;
  int tail = 0;
  int delay = 0;
  ArrayList<Point> points = new ArrayList<Point>();

  Line() {
  }

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
