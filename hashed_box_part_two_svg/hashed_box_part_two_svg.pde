import processing.svg.*;

color bg = #ffffff;
color primary = #000000;
color secondary = #000000;
int w = 2400;
int h = 1600;
int count = 0;
int lineCount = 400;
int boxSides = 18;
ArrayList<Line> lines = new ArrayList<Line>();
ArrayList<Line> box = new ArrayList<Line>();

class Point {
  float x, y;
  color fillColour = #FF0000;

  Point(float x, float y) {
    this.x = x;
    this.y = y;
  }

  Point(float x, float y, color fillColour) {
    this(x, y);
    this.fillColour = fillColour;
  }

  void draw() {
    fill(fillColour);
    strokeWeight(0);
    ellipse(x, y, 10, 10);
  }

  float x() {
    return x;
  }

  float y() {
    return y;
  }

  void setX(float x) {
    this.x = x;
  }

  void setY(float y) {
    this.y = y;
  }

  boolean isFinite() {
    return !Float.isInfinite(this.x) && !Float.isInfinite(this.y);
  }
}

class Line {
  Point p, q;
  color strokeColour;

  Line(Point p, Point q) {
    this.p = p;
    this.q = q;
  }

  Line(Point p, Point q, color strokeColour) {
    this(p, q);
    this.strokeColour = strokeColour;
  }

  void update() {
    this.p.setX(this.p.x() + random(-4, 4));
    this.p.setY(this.p.y() + random(-4, 4));
    this.q.setX(this.q.x() + random(-4, 4));
    this.q.setY(this.q.y() + random(-4, 4));
  }

  void draw() {
    stroke(strokeColour);
    strokeWeight(1);
    line(p.x(), p.y(), q.x(), q.y());
  }

  Point getIntersect(Line l2) {
    float a1 = this.p.y - this.q.y;
    float b1 = this.q.x - this.p.x;
    float c1 = a1 * this.q.x + b1 * this.q.y;

    float a2 = l2.p.y - l2.q.y;
    float b2 = l2.q.x - l2.p.x;
    float c2 = a2 * l2.q.x + b2 * l2.q.y;

    float delta = a1 * b2 - a2 * b1;
    return new Point((b2 * c1 - b1 * c2) / delta, (a1 * c2 - a2 * c1) / delta);
  }

  boolean isIntersect(Line l2) {
    Point intersect = getIntersect(l2);
    return intersect.isFinite() && onSegment(intersect) && l2.onSegment(intersect);
  }

  boolean onSegment(Point r) 
  { 
    if (r.x() <= max(p.x(), q.x()) && r.x() >= min(p.x(), q.x()) && 
      r.y() <= max(p.y(), q.y()) && r.y() >= min(p.y(), q.y())) 
      return true; 

    return false;
  } 

  float maxX() {
    return max(this.p.x(), this.q.x());
  }

  float maxY() {
    return max(this.p.y(), this.q.y());
  }

  float minX() {
    return min(this.p.x(), this.q.x());
  }

  float minY() {
    return min(this.p.y(), this.q.y());
  }

  Point getP() {
    return p;
  }

  Point getQ() {
    return q;
  }
}

class Box {
  Box(float x1, float y1, float x2, float y2) {
  }
}

void setup() {
  frameRate(24);
  background(bg);
  size(2400, 1600, SVG, "16.svg");
  for (int i = 0; i < lineCount; i++) {
    lines.add(new Line(new Point(i * 10 - w, w), new Point(i * 10, 0),
    primary));
  }

  box.add(new Line(
    new Point(random(10, w-10), random(10, h-10)), 
    new Point(random(10, w-10), random(10, h-10)),
    primary
    ));
  for (int i = 1; i < boxSides -1; i++) {
    box.add(new Line(
      new Point(box.get(i-1).getQ().x(), box.get(i-1).getQ().y()), 
      new Point(random(10, w-10), random(10, h-10)),
    primary
      ));
  }
  box.add(new Line(
    new Point(box.get(boxSides-2).getQ().x(), box.get(boxSides-2).getQ().y()), 
    new Point(box.get(0).getP().x(), box.get(0).getP().y()),
    primary
    ));
}

void draw() {
  background(bg);
  ArrayList<Point> intersects = new ArrayList<Point>();
  for (int i = 0; i < box.size(); i++) {
    box.get(i).draw();
    for (int j = 0; j < lines.size(); j++) {
      if (box.get(i).isIntersect(lines.get(j))) {
        intersects.add(box.get(i).getIntersect(lines.get(j)));
      }
    }
  }
  for (int i = floor(intersects.size()/2); i >= 0; i--) {
    line(
      intersects.get(i).x(), 
      intersects.get(i).y(), 
      intersects.get(intersects.size()-1-i).x(), 
      intersects.get(intersects.size()-1-i).y()
      );
  }

  //saveFrame("f####.png");
  count++;
  if (count > 1)
    exit();
}
