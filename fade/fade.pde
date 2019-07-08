color bg = color(0, 0, 0);
Grid grid = new Grid();
Fade fadeOut = new Fade(0.05);
int wait = 6;

void setup() {
  background(bg);
  frameRate(24);
  size(640, 360);
  grid.draw();
}

void draw() {
  background(bg);
  grid.draw();
  fadeOut.draw();
  saveFrame("f####.png");
  if(fadeOut.isComplete()) wait--;
  if (wait == 0) exit();
}

class Grid {
  color rectFill;
  color rectStroke;

  public Grid() {
    this(color(50, 46, 16), color(250, 246, 216));
  }

  public Grid(color rectFill, color strokeFill) {
    this.rectFill = rectFill;
    this.rectStroke = strokeFill;
  }

  public void draw() {
    fill(rectFill);
    stroke(rectStroke);
    strokeWeight(1);
    for (int i = 0; i < 64; i++) {
      for (int j = 0; j < 36; j++) {
        pushMatrix();
        translate(i * 10, j * 10);
        rect(1, 1, 8, 8);
        popMatrix();
      }
    }
  }
}

class Fade {
  float x = 0;
  float y = 0;
  int w = 640;     
  int h = 360;
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
      }
  }
}
