ArrayList<RainDrop> rainDrops = new ArrayList<RainDrop>();

void setup() {
  size(375, 768);
  frameRate(30);
}

void draw() {
  for (int i = 0; i < random(50) + 2; i++) {
    rainDrops.add(
      new RainDrop(
      new Point(random(-100, 374), random(3)), PI/2 + (random(0.2) - 0.2), random(4, 6))
      );
  }
  background(#102020);
  noStroke();
  fill(#051f22);
  rect(0, 0, 375, 668);
  ArrayList<RainDrop> remove = new ArrayList<RainDrop>();
  for (RainDrop rain : rainDrops) {
    rain.update();
    if (rain.y() > random(670, 800)) {
      remove.add(rain);
      strokeWeight(0.8);
      stroke(#eaecef);
      noFill();
      ellipse(rain.x(), rain.y(), 10, 4);
      ellipse(rain.x(), rain.y(), 5, 2);
      continue;
    }
    rain.draw();
  }
  rainDrops.removeAll(remove);
  saveFrame("f####.png");
}

class Point {
  private float _x;
  private float _y;
  Point(float x, float y) {
    _x = x;
    _y = y;
  }

  float x() {
    return _x;
  }

  float y() {
    return _y;
  }

  void setX(float x) {
    _x = x;
  }

  void setY(float y) {
    _y = y;
  }
}

class Vector {
  Point _position;

  Vector(float x, float y) {
    _position = new Point(x, y);
  }

  Vector(Point point) {
    _position = point;
  }

  float x() {
    return _position.x();
  }

  void setX(float x) {
    _position.setX(x);
  }

  float y() {
    return _position.y();
  }

  void setY(float y) {
    _position.setY(y);
  }

  Point position() {
    return _position;
  }

  void setPoint(Point point) {
    _position = point;
  }

  void setAngle(float angle) {
    float _length = getLength();
    _position.setX(cos(angle) * _length);
    _position.setY(sin(angle) * _length);
  }

  float getAngle() {
    return atan2(_position.y(), _position.x());
  }

  void setLength(float _length) {
    float angle = this.getAngle();
    this._position.setX(cos(angle) * _length);
    this._position.setY(sin(angle) * _length);
  }

  float getLength() {
    return sqrt(
      _position.x() * _position.x() +
      _position.y() * _position.y()
      );
  }

  Vector addVector(Vector v2) {
    return new Vector(_position.x() + v2.x(), _position.y() + v2.y());
  }

  Vector subtractVector(Vector v2) {
    return new Vector(_position.x() - v2.x(), _position.y() - v2.y());
  }

  Vector multiply(float value) {
    return new Vector(_position.x() * value, _position.y() * value);
  }

  Vector divide(float value) {
    return new Vector(_position.x() / value, _position.y() / value);
  }

  void addTo(Vector v2) {
    _position.setX(_position.x() + v2.x());
    _position.setY(_position.y() + v2.y());
  }

  void subtractFrom(Vector v2) {
    _position.setX(_position.x() - v2.x());
    _position.setY(_position.y() - v2.y());
  }

  void multiplyBy(float value) {
    _position.setX(_position.x() * value);
    _position.setY(_position.y() * value);
  }

  void divideBy(float value) {
    _position.setX(_position.x() / value);
    _position.setY(_position.y() / value);
  }

  void angleTo(Vector v2) {
    Math.atan2(
      v2.y() - this.y(), 
      v2.x() - this.x() 
      );
  }
}

class RainDrop {
  private float _lastX;
  private float _lastY;
  private Vector _position;
  private Vector _velocity;
  private float _angle = 0;
  private float _speed = 2;

  RainDrop(Point p) {
    _position = new Vector(p);
    _velocity = new Vector(0, 0);
    _velocity.setLength(_speed);
    _velocity.setAngle(_angle);
  }

  RainDrop(Point p, float angle, float speed) {
    this(p);
    _angle = angle;
    _speed = speed;
    _velocity.setLength(_speed);
    _velocity.setAngle(_angle);
  }

  void update() {
    _lastX = _position.x();
    _lastY = _position.y();
    _position.addTo(_velocity.multiply(_speed));
  }

  void draw() {
    strokeWeight(0.8);
    stroke(#eaecef);
    line(
      _lastX, _lastY, 
      _position.x(), _position.y()
      );
  }

  float x() {
    return _position.x();
  }

  float y() {
    return _position.y();
  }
}
