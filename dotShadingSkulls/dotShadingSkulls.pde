
void setup() {
  PImage img = loadImage("gabor-molnar-xesvLZQ1_bc-unsplash.jpg");
  background(#ECDED7);
  size(1600, 2400);
  for (int i = 0; i < 1600/18; i++) {
    for (int j = 0; j < 2400/18; j++) {
      PImage newImg = img.get(i*40, j*40, 40, 40);
      float shade = extractShadeFromImage(newImg);
      //DotBox box;
      //box = new DotBox(new Point(i*24, j*24));
      //box.setScale(1 - shade);
      //box.draw();
      CrossBox box;
      box = new CrossBox(new Point(i*18, j*18));
      box.setScale(1 - shade);
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
    pushMatrix();
    translate(0.5, 0.5);
    ellipse(_x, _y, _size * _scale, _size * _scale);
    popMatrix();
  }
}

class Cross extends ScalingShape {
  private float _stroke = 4;
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

class DotBox {
  Point _topLeft;
  float _scale;
  ArrayList<Dot> _dots = new ArrayList<Dot>();

  DotBox(Point topLeft) {
    _topLeft = topLeft;
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        _dots.add(new Dot(topLeft.x() + (i * 8), topLeft.y() + (j * 8), 8));
      }
    }
  }

  void setScale(float scale) {
    _scale = scale;
  }

  void draw() {
    for (Dot dot : _dots) {
      dot.setScale(_scale);
      dot.draw();
    }
  }
}

class CrossBox {
  Point _topLeft;
  float _scale;
  ArrayList<Cross> _dots = new ArrayList<Cross>();

  CrossBox(Point topLeft) {
    _topLeft = topLeft;
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        _dots.add(new Cross(topLeft.x() + (i * 6), topLeft.y() + (j * 6), 6));
      }
    }
  }

  void setScale(float scale) {
    _scale = scale;
  }

  void draw() {
    for (Cross dot : _dots) {
      dot.setScale(_scale);
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
