
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
    lines.add(new Line(50, i * 80));
  }
}

void draw() {
  background(bg);
  for (Line line : lines) {
    line.update();
  }
  for (int i = 0; i < 12; i++) {
    pushMatrix();
    translate(320, 180);
    rotate(map(i, 0, 12, 0, PI*2));
    for (Line line : lines) {
      line.draw();
    }
    popMatrix();
  }
  count++;
  saveFrame("f####.png");
  if (count == 300) exit();
}

class Point {
  int x = 0;
  int y = 0;
  Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  void update() {
    x += y % 20 <= 10 ? 1 : 0;
    y += x % 20 > 10 ? 0 : 1;
  }

  void draw() {
    ellipse(x, y, 1, 1);
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
