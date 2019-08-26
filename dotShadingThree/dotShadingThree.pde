DotBox box;

void setup() {
  PImage img = loadImage("frida-bredesen-c_cPNXlovvY-unsplash.jpg");
  background(#FCFEF7);
  size(4800, 3200);
  for (int i = 0; i < 4800/20; i++) {
    for (int j = 0; j < 3200/20; j++) {
      PImage newImg = img.get(i*40, j*40, 40, 40);
      float shade = extractShadeFromImage(newImg);
      box = new DotBox(new Point(i*40, j*40));
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

class Dot extends Point {
  private float _size;
  private float _scale = 1;
  private color _colour;

  Dot(float x, float y, float size) {
    this(x, y, size, #18242E);
  }

  Dot(float x, float y, float size, color colour) {
    super(x, y);
    _size = size;
    _colour = colour;
  }

  void setScale(float scale) {
    _scale = scale;
  }

  void draw() {
    noStroke();
    fill(_colour);
    ellipse(_x, _y, _size * _scale, _size * _scale);
  }
}

class DotBox {
  Point _topLeft;
  float _scale;
  ArrayList<Dot> _dots = new ArrayList<Dot>();
  DotBox(Point topLeft) {
    _topLeft = topLeft;
    for (int i = 0; i < 5; i++) {
      for (int j = 0; j < 5; j++) {
        _dots.add(new Dot(topLeft.x() + (i * 8) , topLeft.y() + (j * 8), 8));
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
