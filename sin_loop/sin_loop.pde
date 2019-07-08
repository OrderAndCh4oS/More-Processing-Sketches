Point p = new Point(0, 0, 10);
float distance = 620;
int iterations = 0;

class Point {
  float x, y, radius;
  Point (float x, float y, float radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
  }
  
  void update() {
     x += PI / 20;
  }
  
  void draw() {
     stroke(175, 40, 90);
     fill(175, 40, 90);
     float dX = 10 + (sin(x) * distance);
     ellipse(width/2 + dX - dX/2, height/2, 15 + dX / 2, 15 + dX / 2);
  }
}

void setup() {
  size(640, 360);
  frameRate(24);
  background(50, 80, 155);
}

void draw() {
  background(50, 80, 155);
  p.update();
  p.draw();
  iterations++;
  saveFrame("f####.png");
  if (iterations == 39) exit();
}
