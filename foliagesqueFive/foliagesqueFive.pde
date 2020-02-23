import java.util.*;

ArrayList<Line> lines = new ArrayList<Line>();
int frames = 0;
ArrayList<Integer> colours = new ArrayList<Integer>();

void setup() {
  size(2000, 1200);
  background(#011F26);
  noStroke();
  colours.add(#118C76);
  colours.add(#25D9B8);
  colours.add(#F2BB16);
  colours.add(#BF800B);
  Line initialLine = new Line(new Point(1000, 600), 50, PI*0.5);
  lines.add(initialLine);
  initialLine.draw();
}

void draw() {
  frames++;
  int drawnCount = 0;
  while (drawnCount < 150) {
      Line nextLineBase = getRandomLine();
      Point nextPoint = nextLineBase.getRandomPoint();
      float offsetAngleRange = PI;
      float angle = nextLineBase.getAngle() - (random(offsetAngleRange) / 2) - offsetAngleRange;
      Line nextLine = new Line(nextPoint, 25 + random(40), angle);
      boolean doesIntersect = false;
      for (Line l : lines) {
        if (nextLine.isIntersect(l)) {
          doesIntersect = true;
          break;
        }
      }
      if (!doesIntersect) {
        nextLine.draw();
        lines.add(nextLine);
        drawnCount++;
      }
    
  } 

  saveFrame("f###.png");
}

Line getRandomLine() {
  return lines.get(new Random().nextInt(lines.size()));
}

int getRandomColour() {
  return colours.get(new Random().nextInt(colours.size()));
}

class Point implements Cloneable {
  private float _x;
  private float _y;
  private boolean _isNull = false;

  public Point() {
    _isNull = true;
  }

  public Point(float x, float y) {
    _x = x;
    _y = y;
    _isNull = false;
  }

  public void setX(float x) {
    _x = x;
  }

  public void setY(float y) {
    _y = y;
  }

  public float x() {
    return _x;
  }

  public float y() {
    return _y;
  }

  public boolean isFinite() {
    return !Float.isInfinite(_x) && !Float.isInfinite(_y);
  }

  public boolean isNull() {
    return _isNull;
  }

  public Point clone() throws CloneNotSupportedException {
    return (Point) super.clone();
  }
}

class Vector {
  private Point _point;

  public Vector(float x, float y) {
    _point = new Point(x, y);
  }

  public Vector(Point point) {
    try {
      _point = point.clone();
    } 
    catch (CloneNotSupportedException e) {
      println("Cloning Point not supported.");
    }
  }

  public float x() {
    return _point.x();
  }

  public void setX(float x) {
    _point.setX(x);
  }

  public float y() {
    return _point.y();
  }

  public void setY(float y) {
    _point.setY(y);
  }

  public Point getPoint() {
    return _point;
  }

  public void setPoint(Point point) {
    _point = point;
  }

  public float getAngle() {
    return atan2(_point.y(), _point.x());
  }

  public void setAngle(float angle) {
    float _length = getLength();
    _point.setX(cos(angle) * _length);
    _point.setY(sin(angle) * _length);
  }

  public float getLength() {
    return sqrt(
      _point.x() * _point.x() +
      _point.y() * _point.y()
      );
  }

  public void setLength(float _length) {
    float angle = this.getAngle();
    _point.setX(cos(angle) * _length);
    _point.setY(sin(angle) * _length);
  }

  public Vector addVector(Vector v2) {
    return new Vector(_point.x() + v2.x(), _point.y() + v2.y());
  }

  public Vector subtractVector(Vector v2) {
    return new Vector(_point.x() - v2.x(), _point.y() - v2.y());
  }

  public Vector multiply(float value) {
    return new Vector(_point.x() * value, _point.y() * value);
  }

  public Vector divide(float value) {
    return new Vector(_point.x() / value, _point.y() / value);
  }

  public void addTo(Vector v2) {
    _point.setX(_point.x() + v2.x());
    _point.setY(_point.y() + v2.y());
  }

  public void subtractFrom(Vector v2) {
    _point.setX(_point.x() - v2.x());
    _point.setY(_point.y() - v2.y());
  }

  public void multiplyBy(float value) {
    _point.setX(_point.x() * value);
    _point.setY(_point.y() * value);
  }

  public void divideBy(float value) {
    _point.setX(_point.x() / value);
    _point.setY(_point.y() / value);
  }

  public float angleTo(Vector v2) {
    return atan2(
      v2.y() - _point.y(), 
      v2.x() - _point.x()
      );
  }

  public float distanceTo(Vector v2) {
    float dX = _point.x() - v2.x();
    float dY = _point.y() - v2.y();
    return sqrt((dX * dX) + (dY * dY));
  }
}

class Line {
  private Point _p, _q;

  public Line(Point p, Point q) {
    this._p = p;
    this._q = q;
  }

  public Line(Point p, float len, float angle) {
    _p = p;
    Vector temp = new Vector(0, 0);
    temp.setLength(len);
    temp.setAngle(angle);
    temp.addTo(new Vector(_p));
    _q = temp.getPoint();
  }

  public Point getIntersect(Line l2) {
    float a1 = _p.y() - _q.y();
    float b1 = _q.x() - _p.x();
    float c1 = a1 * _q.x() + b1 * _q.y();

    float a2 = l2.p().y() - l2.q().y();
    float b2 = l2.q().x() - l2.p().x();
    float c2 = a2 * l2.q().x() + b2 * l2.q().y();

    float delta = a1 * b2 - a2 * b1;
    return new Point((b2 * c1 - b1 * c2) / delta, (a1 * c2 - a2 * c1) / delta);
  }

  public boolean isIntersect(Line l2) {
    Point intersect = getIntersect(l2);
    return intersect.isFinite() && onSegment(intersect) && l2.onSegment(intersect);
  }

  public boolean onSegment(Point r) {
    return r.x() <= max(p().x(), q().x()) && r.x() >= min(p().x(), q().x()) &&
      r.y() <= max(p().y(), q().y()) && r.y() >= min(p().y(), q().y());
  }

  public float maxX() {
    return max(_p.x(), _q.x());
  }

  public float maxY() {
    return max(_p.y(), _q.y());
  }

  public float minX() {
    return min(_p.x(), _q.x());
  }

  public float minY() {
    return min(_p.y(), _q.y());
  }

  public Point getMidPoint() {
    float dX = (_p.x() + _q.x()) / 2;
    float dY = (_p.y() + _q.y()) / 2;
    return new Point(dX, dY);
  }

  public Point getRandomPoint() {
    float t = random(1);
    float dX = _p.x() + t * (_q.x() - _p.x());
    float dY = _p.y() + t * (_q.y() - _p.y());
    return new Point(dX, dY);
  }

  private Point drawTo() {
    float dX = _p.x() + 0.9 * (_q.x() - _p.x());
    float dY = _p.y() + 0.9 * (_q.y() - _p.y());
    return new Point(dX, dY);
  }

  public Point p() {
    return _p;
  }

  public Point q() {
    return _q;
  }

  float getAngle() {
    float dX = _p.x() - _q.x();
    float dY = _p.y() - _q.y();
    float theta = atan2(dY, dX);
    return theta;
  }

  void draw() {
    fill(getRandomColour());
    Vector base = new Vector(_p);
    Vector move = new Vector(0, 0);
    move.setLength(1);
    move.setAngle(getAngle() + PI * 0.5);
    base.addTo(move);
    triangle(base.getPoint().x(), base.getPoint().y(), p().x(), p().y(), drawTo().x(), drawTo().y());
  }
}
