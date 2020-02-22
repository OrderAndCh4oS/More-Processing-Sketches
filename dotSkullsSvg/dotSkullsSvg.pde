import processing.svg.*;
PImage img;
void setup() {
  background(#ffffff);
  size(1500, 2000, SVG, "filename.svg");
  img = loadImage("vishal-banik-Qs7sE3eTFZ4-unsplash.jpg");
  //saveFrame("f1###.png");
}  

void draw() {
  println("Started.");
  int section = 8;
  int reduceBy = 2;
  line(0, 0, width/2, height);
  for (int i = 0; i < (3000/section)/reduceBy; i++) {
    for (int j = 0; j < (4000/section)/reduceBy; j++) {
      PImage newImg = img.get((i*section)*reduceBy, (j*section)*reduceBy, section*reduceBy, section*reduceBy);
      float shade = extractShadeFromImage(newImg);
      //DotBox box;
      //box = new DotBox(new Point(i*section, j*section));
      //box.setScale(1 - shade);
      //box.draw();
      CrossBox box;
      box = new CrossBox(new Point(i*section, j*section));
      switch(floor(shade * 6)) {
      case 0:
        box.setColour(#000000);
        break;
      case 1:
        box.setColour(#111111);
        break;
      case 2:
        box.setColour(#222222);
        break;
      default: 
        box.setColour(#333333);
        break;
      }
      box.setScale(1 - shade);
      box.draw();
    }
  }
  println("Finished.");
  exit();
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
    pushMatrix();
    translate(0.5, 0.5);
    ellipse(_x, _y, _size * _scale, _size * _scale);
    popMatrix();
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
  protected int _size = 8;
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
    for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 5; j++) {
        _dots.add(new Dot(topLeft.x() + (i * 8), topLeft.y() + (j * 8), 8));
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
