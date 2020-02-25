import java.util.*;

Colours colourSetOne = new Colours(#000D08, #E2F26B, #8C8372, #F27C38, #F21D1D);
Colours colourSetTwo = new Colours(#04090D, #F25C78, #BABDBF, #F2D8CE, #A62D2D);
Colours colourSetThree = new Colours(#0D0C0B, #262523, #F2D6B3, #A67449, #594B3F);
Colours colourSetFour = new Colours(#0F0C05, #4FF588, #A0AAA1, #CEF5BA, #2CA833);
Colours colourSetFive = new Colours(#000D08, #FFB952, #FF7829, #FF441F, #FF0F01, #FF4F6F);
Colours colourSetSix = new Colours(#1F0200, #8017FF, #4911FF, #171AFF, #1D68FF, #6DC0FF);
Colours colourSetSeven = new Colours(#010F03, #C0FC0A, #02EBA5, #14DE25, #65FF24, #20FF7B);
Colours colourSetDarkOne = new Colours(#000D08, #8017FF);
Colours colourSetLightOne = new Colours(#000D08, #FF441F);

Colours colours;
Colours coloursTwo;

float a = random(1) * 4 - 2;
float b = random(1) * 4 - 2;
float c = random(1) * 4 - 2;
float d = random(1) * 4 - 2;

ArrayList<Point> points = new ArrayList<Point>();
ArrayList<Point> pointsTwo = new ArrayList<Point>();

void setup() {
  colours = colourSetLightOne;
  coloursTwo = colourSetDarkOne;
  size(1500, 1500);
  background(colours.bg());
  noStroke();
  strokeWeight(0.5);
  for (int i = 0; i < 100; i++) {
    points.add(new Point(0, (1500/100)*i, colours.rand()));
    pointsTwo.add(new Point(1500, (1500/100)*i, coloursTwo.rand()));
  }
}

void draw() {
  for(int i = 0; i < points.size(); i++) {
    points.get(i).draw();
    pointsTwo.get(i).draw();
  }
  
  saveFrame("f###.png");
}

class Point implements Cloneable {
  private float _x;
  private float _y;
  private float _vx;
  private float _vy;
  private boolean _isNull = false;
  private int _colour;
  public Point() {
    _isNull = true;
  }
  public Point(float x, float y, int colour) {
    _x = x;
    _y = y;
    _colour = colour;
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
  void draw() {
    fill(_colour);
    float lastX = _x;
    float lastY = _y;
    float value = getValue();
    _vx += Math.cos(value) * 0.8;
    _vy += Math.sin(value) * 0.8;
    _x += _vx;
    _y += _vy;
    triangle(lastX, lastY, lastX+4, lastY, _x, _y);
    _vx *= 0.97;
    _vy *= 0.97;
  }
  float getValue() {
    // clifford attractor
    // http://paulbourke.net/fractals/clifford/

    // scale down x and y
    float scale = 0.005;
    float dx = (_x - width / 2) * scale;
    float dy = (_y - height / 2)  * scale;

    // attactor gives new x, y for old one. 
    float x1 = sin(a * dy) + c * cos(a * dx);
    float y1 = sin(b * dx) + d * cos(b * dy);

    // find angle from old to new. that's the value.
    return atan2(y1 - dy, x1 - dx);
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
