int xPixels = 640;
int yPixels = 540;

color bg = color(0, 0, 0);
color primary = color(200, 200, 230);

Grid grid;
Fade fadeOut = new Fade(0.1);
int iterations = 20;
int wait = 6;


ArrayList<ArrayList<Animate>> boxes = new ArrayList<ArrayList<Animate>>(); 

void setup() {
  background(bg);
  frameRate(24);
  size(640, 540);
  for (int i = 0; i < 64; i++) {
      ArrayList<Animate> boxColumn = new ArrayList<Animate>();
      for(int j = 0; j < 54; j++) {
         boxColumn.add(new Box(15, 15, bg, primary, 3));
      }
      boxes.add(boxColumn);
  }
  grid = new Grid(boxes);
  grid.draw();
}

void draw() {
  background(bg);
  grid.draw();
  println(iterations);
  if (iterations <= 0) {
    fadeOut.draw();
    if(fadeOut.isComplete()) wait--;
    if (wait == 0) exit();
  }
  saveFrame("f####.png");
  iterations--;
}

interface Animate {
  void update(); 
  void draw();
}

class Box implements Animate {
  float width = 8;
  float height = 8;
  color boxFill;
  color boxStroke;
  float strokeWeight = 1;
  float angle = 0;
  
  public Box() {
    this(color(50, 46, 16), color(250, 246, 216));
  }
  public Box(float width, float height) {
    this.width = width;
    this.height = height;
  }
  public Box(float width, float height, color boxFill) {
    this.width = width;
    this.height = height;
    this.boxFill = boxFill;
  }
  public Box(float width, float height, color boxFill, color boxStroke) {
    this(width, height, boxFill);
    this.boxStroke = boxStroke;
  }
  public Box(float width, float height, color boxFill, color boxStroke, float strokeWeight) {
    this(width, height, boxFill, boxStroke);
    this.strokeWeight = strokeWeight;
  }
  public Box(float width, float height, color boxFill, color boxStroke, float strokeWeight, float angle) {
    this(width, height, boxFill, boxStroke, strokeWeight);
    this.angle = angle;
  }
  
  void update() {
    angle += 0.15;
  }
  
  void draw() {
    fill(boxFill);
    stroke(boxStroke);
    strokeWeight(strokeWeight);
    pushMatrix();
    translate(width/2, height/2);
    rotate(angle);
    rect(-(width/2), -(height/2), width, height);
    popMatrix();
  }
}

class Grid {
  ArrayList<ArrayList<Animate>> objs;

  public Grid(ArrayList<ArrayList<Animate>> objs) {
    this.objs = objs;
  }
  
  public void draw() {
    int xSize = 64;
    float xSpacing = xPixels / xSize;
    for (int i = 0; i < xSize; i++) {
      int ySize = 54;
      float ySpacing = yPixels / ySize;
      for (int j = 0; j < ySize; j++) {
        pushMatrix();
        translate(i * ySpacing, j * xSpacing);
        objs.get(i).get(j).update();
        objs.get(i).get(j).draw();
        popMatrix();
      }
    }
  }
}

class Fade {
  float x = 0;
  float y = 0;
  int w = xPixels;     
  int h = yPixels;
  color backgroundColour = color(0, 0, 0, 0);
  float alpha = 0;
  float speed;
  boolean isComplete = false;
  
  Fade(float speed) {
    this.speed = speed;
  }
  
  boolean isComplete() {
     return isComplete; 
  }
  
  void draw() {
      strokeWeight(0);
      alpha = lerp(alpha, 256, speed);
      fill(backgroundColour, alpha);
      rect(x, y, w, h);
      if (alpha >= 255) {
          isComplete = true;
          println("Done");
      }
  }
}
