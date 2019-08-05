
color bg = #d4d4d4;
color primary = #000000;
color secondary = #444444;
int lineCount = 40;

ArrayList<Line> lines = new ArrayList<Line>();

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

  boolean isIntersect(Line l2) {
    Point intersect = getIntersect(l2);
    return intersect.isFinite() && onSegment(intersect) && l2.onSegment(intersect);
  }

  boolean onSegment(Point r) 
  { 
    if (
      r.x() <= max(p.x(), q.x()) && r.x() >= min(p.x(), q.x()) && 
      r.y() <= max(p.y(), q.y()) && r.y() >= min(p.y(), q.y())
      ) 
      return true; 

    return false;
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
}

void setup() {
  frameRate(24);
  background(bg);
  size(640, 360);
  for (int i = 0; i < lineCount; i++) {
    lines.add(new Line(new Point(random(640), random(360)), new Point(random(640), random(360))));
  }
}

void draw() {
  background(bg);
  ArrayList<Point> intersects = new ArrayList<Point>();
  for (int i = 0; i < lines.size(); i++) {
    lines.get(i).update();
    lines.get(i).draw();
    for (int j = i; j < lines.size(); j++) {
      if (lines.get(i).isIntersect(lines.get(j))) {
        intersects.add(lines.get(i).getIntersect(lines.get(j)));
      }
    }
    for (Point intersect : intersects) {
      intersect.draw();
    }
  }
  saveFrame("f####.png");
}
