 //<>//
color bg = #000000;
color primary = #ffffff;
color seconday = #dddddd ;
int count = 0;
Line l = new Line(30, 12, 12, 'zig_zag_rotation_cross_two$Cross');
Line l2 = new Line(15, 6, 6, 'zig_zag_rotation_cross_two$Cross');


void setup() {
  size(640, 360);
  frameRate(24);
  background(bg);
  fill(primary);
  stroke(primary);
  strokeWeight(1);
  for (int i = 0; i < 80; i++) {
    l.update();
    l2.update();
  }
}

void draw() {
  background(bg);
  pushMatrix();
  translate(320, 180);
  l.update();
  l2.update();
  for (int i = 0; i < 32; i++) {
    pushMatrix();
    rotate(map(i, 0, 32, 0, PI*2));
    l.draw();
    popMatrix();
    pushMatrix();
    rotate(map(i, 0, 32, 0, PI*2) + (PI/32));
    l2.draw();
    popMatrix();
  }
  popMatrix();
  count++;
  saveFrame("f####.png");
  if (count == 128) exit();
}

abstract class Particle {
  float x;
  float y;
  color colour;
  Particle() {
  }
  Particle(float x, float y, color colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  abstract void draw();

  void setX(float x) {
    this.x = x;
  }

  float getX() {
    return x;
  }

  void setY(float y) {
    this.y = y;
  }

  float getY() {
    return y;
  }

  void setColour(color colour) {
    this.colour = colour;
  }

  color getColour() {
    return colour;
  }
}

class Cross extends Particle {
  float length;

  Cross() {
    super();
  }

  Cross(float x, float y, color colour, float length) {
    super(x, y, colour);
    this.length = length;
  }

  void draw() {
    line(x-length, y-length, x+length, y+length);
    line(x-length, y+length, x+length, y-length);
  }

  void setLength(float length) {
    this.length = length;
  }
}

class Point {
  float x;
  float y;
  float wave;
  float a = 0;
  Particle particle;

  Point(float x, float y, float wave) {
    this.x = x;
    this.y = y;
    this.wave = wave;
  }

  Point(float x, float y, float wave, float angle, Particle particle) {
    this.x = x;
    this.y = y;
    this.wave = wave;
    this.a = angle;
    this.particle = particle;
  }

  void update() {
    float dX = sin(a) * wave;
    this.x = dX - dX / 2;
    this.y += 4;
    this.a++;
  }

  void draw() {
    particle.draw();
    //cross(x, y, map(y, 0, 360, 0.5, 15));
  }

  void cross(float x, float y, float length) {
    line(x-length, y-length, x+length, y+length);
    line(x-length, y+length, x+length, y-length);
  }
}

class Line {
  int iterations = 0;
  int maxTail = 10;
  float angle = 0;
  int tail = 0;
  int delay = 0;
  float wave;
  String particleType;

  ArrayList<Point> points = new ArrayList<Point>();

  Line(int maxTail, int delay, float wave, String particleType) {
    this.maxTail = maxTail;
    this.delay = delay;
    this.wave = wave;
    this.particleType = particleType;
  }

  void update() {
    iterations++;
    tail++;
    for (Point point : points) {
      point.update();
    }
    if (tail < maxTail) { 
      println(particleType);
      try {
        println(particleType);
        
        Particle particle = (Particle)Class.forName(particleType).newInstance();
        points.add(new Point(0, 0, wave, angle, particle));
      } 
      catch (InstantiationException ex) {
        println("oh no");
      } 
      catch (IllegalAccessException ex) {
        println("oh no 2");
      }
    }
    if (maxTail + delay < iterations) {
      tail = 0;
      iterations = 0;
    }
  }

  void draw() {
    for (Point point : points) {
      point.draw();
    }
  }
}
