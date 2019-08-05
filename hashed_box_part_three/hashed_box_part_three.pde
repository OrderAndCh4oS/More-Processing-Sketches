
color bg = #FF52A6;
color bg2 = #8F0606;

color primary = #6C76CC;
color secondary = #444444;
int count = 0;
int lineCount = 560;
int boxSides = 28;
ArrayList<Line> lines = new ArrayList<Line>();
Box box = new Box(10, 790, 10, 590, 4, primary);

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
  float x1, y1, x2, y2;
  int sides;
  color lineColour;
  ArrayList<Line> lines = new ArrayList<Line>();

  Box(float x1, float y1, float x2, float y2, int sides, color lineColour) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.sides = sides;
    this.lineColour = lineColour;
    init();
  }

  void init() {
   for (int i = 0; i < sides; i++) {
      Point p, q;
      if (i == 0) {
        p = new Point(random(x1, y1), random(x2, y2));
        q = new Point(random(x1, y1), random(x2, y2));
      } else if (i == sides -1) {
        p = lines.get(sides-2).getQ(); 
        q = lines.get(0).getP();
      } else {
        p = new Point(lines.get(i-1).getQ().x(), lines.get(i-1).getQ().y()); 
        q = new Point(random(x1, y1), random(x2, y2));
      }
      lines.add(new Line(p, q, lineColour));
    } 
  }

  void draw() {
    for(Line line : lines) {
      line.draw();
    }
  }
}

void setup() {
  frameRate(24);
  background(bg);
  size(800, 600);
  for (int i = 0; i < lineCount; i++) {
    lines.add(new Line(new Point(i * 20 - 3600, 3600), new Point(i * 20, 0), 
      primary));
  }
  
}

void draw() {
  background(bg);
  
  box.draw();
  
  for (int j = 0; j < lines.size(); j++) {
      lines.get(j).draw();
  }

  saveFrame("f####.png");
  count++;
  if (count > 1)
    exit();
}
