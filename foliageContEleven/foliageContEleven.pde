import java.util.*;
ArrayList<Line> drawLines = new ArrayList<Line>();
ArrayList<Line> collisionLines = new ArrayList<Line>();

int frames = 0;
int totalCount = 0;

float scale = 0.99;

Colours colourSetBw = new Colours(#0B0B0B, #ADADAD, #6E6E6E, #858585, #949494);
Colours colourSetOne = new Colours(#000D08, #E2F26B, #8C8372, #F27C38, #F21D1D);
Colours colourSetTwo = new Colours(#04090D, #F25C78, #BABDBF, #F2D8CE, #A62D2D);
Colours colourSetThree = new Colours(#0D0C0B, #262523, #F2D6B3, #A67449, #594B3F);
Colours colourSetFour = new Colours(#0F0C05, #4FF588, #A0AAA1, #CEF5BA, #2CA833);
Colours colourSetFive = new Colours(#0D0C0B, #FFB952, #FF7829, #FF441F, #FF0F01, #FF4F6F);
Colours colourSetSix = new Colours(#0C080F, #8017FF, #4911FF, #171AFF, #1D68FF, #6DC0FF);
Colours colourSetSeven = new Colours(#010F03, #C0FC0A, #02EBA5, #14DE25, #65FF24, #20FF7B);
Colours colourSetEight = new Colours(#2B1829, #FF5740, #E83A49, #FF4DB5, #E03AE8, #AD39E3);

void setup() {
  size(2880, 1800);
  background(#0C080F);
  noStroke();
  initStems(colourSetSix, colourSetBw, 10);
  initStems(colourSetEight, colourSetBw, 10);
  saveFrame("f###.png");
}

void draw() {
  frames++;
  int drawnCount = 0;
  while (drawnCount < 150) {
    Line nextLineBase = getRandomLine();
    float nextLength = nextLineBase.getLength() * scale;
    Point nextPoint = nextLineBase.getRandomPoint();
    float angleRange = 0.4;
    float angleRand = PI*angleRange - random(PI*angleRange*2);
    float angle = nextLineBase.getAngle() + angleRand;
    Line nextLine = new Line(nextPoint, nextLength * (0.6 + random(0.4)), angle, nextLineBase.getFoliageColours(), nextLineBase.getStemColours());
    boolean doesIntersect = false;
    for (Line l : collisionLines) {
      if (nextLine.isIntersect(l)) {
        doesIntersect = true;
        break;
      }
    }
    if (!doesIntersect && nextLength > 25) {
      nextLine.draw();
      drawLines.add(nextLine);
      collisionLines.add(nextLine);
      drawnCount++;
      totalCount++;
    }
  }
  //scale -= 0.002;
  saveFrame("f###.png");
  if (frames == 80) exit();
}

void initStems(Colours foliageColours, Colours stemColours, int stemCount) {
  for (int i = 0; i < stemCount; i++) {
    Line l = new Line(new Point(640 + random(1600), 300 + random(1200)), 140, random(PI*2), foliageColours, stemColours);
    drawLines.add(l);
    collisionLines.add(l);
    l.draw();
  }
}

Line getRandomLine() {
  return drawLines.get(new Random().nextInt(drawLines.size()));
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
  private float _length;
  private Colours _foliageColours;
  private Colours _stemColours;
  public Line(Point p, Point q) {
    this._p = p;
    this._q = q;
  }
  public Line(Point p, float len, float angle) {
    _p = p;
    _length = len;
    Vector temp = new Vector(0, 0);
    temp.setLength(_length);
    temp.setAngle(angle);
    temp.addTo(new Vector(_p));
    _q = temp.getPoint();
  }
  public Line(Point p, float len, float angle, Colours foliageColours, Colours stemColours) {
    this(p, len, angle);
    _foliageColours = foliageColours;
    _stemColours = stemColours;
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
    float dX = _p.x() + 0.85 * (_q.x() - _p.x());
    float dY = _p.y() + 0.85 * (_q.y() - _p.y());
    return new Point(dX, dY);
  }
  public Point p() {
    return _p;
  }
  public Point q() {
    return _q;
  }
  public float getLength() {
    return _length;
  }
  float getAngle() {
    float dX = _p.x() - _q.x();
    float dY = _p.y() - _q.y();
    float theta = atan2(dY, dX);
    return theta + PI;
  }
  Colours getFoliageColours() {
    return _foliageColours;
  }
  Colours getStemColours() {
    return _stemColours;
  }
  void draw() {
    Vector base = new Vector(_p);
    Vector move = new Vector(0, 0);
    move.setLength(2);
    move.setAngle(getAngle() + PI * 0.5);
    base.addTo(move);
    
    Vector baseTwo = new Vector(_p);
    Vector moveTwo = new Vector(0, 0);
    moveTwo.setLength(2);
    moveTwo.setAngle(getAngle() + PI * 1.5);
    baseTwo.addTo(moveTwo);
  
    if (_length < 100) {
      fill(_foliageColours.rand());
    } else {
      fill(_stemColours.rand());
    }
    triangle(base.getPoint().x(), base.getPoint().y(), baseTwo.getPoint().x(), baseTwo.getPoint().y(), drawTo().x(), drawTo().y());
  }
}

class Colours {
  ArrayList<Integer> _colours = new ArrayList<Integer>();
  int _bg;
  Colours(int bg, int ...colours) {
    _bg = bg;
    for (int colour : colours) {
      _colours.add(colour);
    }
  }
  ArrayList<Integer> get() {
    return _colours;
  }
  int rand() {
    return _colours.get(new Random().nextInt(_colours.size()));
  }
  int bg() {
    return _bg;
  }
}
