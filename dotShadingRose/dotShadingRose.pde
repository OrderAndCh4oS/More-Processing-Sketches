
void setup() {
  PImage img = loadImage("eddie-howell-jBLReYARfXY-unsplash.jpg");
  background(#805E5E);
  size(2400, 3600);
  for (int i = 0; i < 2400/18; i++) {
    for (int j = 0; j < 3600/18; j++) {
      PImage newImg = img.get(i*48, j*48, 48, 48);
      float shade = extractShadeFromImage(newImg);
      DotBox box;
      box = new DotBox(new Point(i*18, j*18));
      //box.setScale(1 - shade);
      //box.draw();
      //CrossBox box;
      //box = new CrossBox(new Point(i*24, j*24));
      switch(floor(shade * 6)) {
      case 0:
        box.setColour(#805E5E);
        break;
      case 1:
        box.setColour(#803737);
        break;
      case 2:
        box.setColour(#FF6E6E);
        break;
      default: 
        box.setColour(#FFBABA);
        break;
      }
      box.setScale(shade);
      box.draw();
    }
  }

  saveFrame("f###.png");
}  

class Point {
  protected float _x, _y;

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

abstract class ScalingShape extends Point {
  protected float _size;
  protected float _scale = 1;
  protected color _colour;

  ScalingShape(float x, float y, float size, color colour) {
    super(x, y);
    _size = size;
    _colour = colour;
  }

  void setScale(float scale) {
    _scale = scale;
  }

  void setColour(color colour) {
    _colour = colour;
  }

  abstract void draw();
}

class Dot extends ScalingShape {
  Dot(float x, float y, float size) {
    this(x, y, size, #18242E);
  }

  Dot(float x, float y, float size, color colour) {
    super(x, y, size, colour);
  }

  void draw() {
    noStroke();
    fill(_colour);
    ellipse(_x, _y, _size * _scale, _size * _scale);
  }
}

class Cross extends ScalingShape {
  private float _stroke = 3;
  Cross(float x, float y, float size) {
    this(x, y, size, #28343E);
  }

  Cross(float x, float y, float size, color colour) {
    super(x, y, size, colour);
  }

  void draw() {
    strokeWeight(_scale * _stroke);
    stroke(_colour);
    noFill();
    pushMatrix();
    translate(-_size/2, -_size/2);
    line(_x, _y, _x + _size, _y + _size);
    line(_x + _size, _y, _x, _y + _size);
    popMatrix();
  }
}

class Box {
  protected Point _topLeft;
  protected int _points = 3;
  protected int _size = 6;
  protected float _scale;
  protected color _colour;

  Box(Point topLeft) {
    _topLeft = topLeft;
  }

  void setScale(float scale) {
    _scale = scale;
  }

  void setColour(color colour) {
    _colour = colour;
  }
}

class DotBox extends Box {
  ArrayList<Dot> _dots = new ArrayList<Dot>();

  DotBox(Point topLeft) {
    super(topLeft);
    for (int i = 0; i < _points; i++) {
      for (int j = 0; j < _points; j++) {
        _dots.add(new Dot(topLeft.x() + (i * _size), topLeft.y() + (j * _size), _size));
      }
    }
  }

  void draw() {
    for (Dot dot : _dots) {
      dot.setScale(_scale);
      dot.setColour(_colour);
      dot.draw();
    }
  }
}

class CrossBox extends Box {
  ArrayList<Cross> _dots = new ArrayList<Cross>();

  CrossBox(Point topLeft) {
    super(topLeft);
    for (int i = 0; i < _points; i++) {
      for (int j = 0; j < _points; j++) {
        _dots.add(new Cross(topLeft.x() + (i * _size), topLeft.y() + (j * _size), _size));
      }
    }
  }

  void draw() {
    for (Cross dot : _dots) {
      dot.setScale(_scale);
      dot.setColour(_colour);
      dot.draw();
    }
  }
}

color extractColorFromImage(PImage img) {
  img.loadPixels();
  int r = 0, g = 0, b = 0;
  for (int i=0; i<img.pixels.length; i++) {
    color c = img.pixels[i];
    r += c>>16&0xFF;
    g += c>>8&0xFF;
    b += c&0xFF;
  }
  r /= img.pixels.length;
  g /= img.pixels.length;
  b /= img.pixels.length;

  return color(r, g, b);
}

float extractShadeFromImage(PImage img) {
  img.loadPixels();
  int r = 0, g = 0, b = 0;
  for (int i=0; i<img.pixels.length; i++) {
    color c = img.pixels[i];
    r += c>>16&0xFF;
    g += c>>8&0xFF;
    b += c&0xFF;
  }
  r /= img.pixels.length;
  g /= img.pixels.length;
  b /= img.pixels.length;

  return (0.2126*r + 0.7152*g + 0.0722*b) / 255;
}
