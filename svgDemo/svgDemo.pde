import processing.svg.*;

void setup() {
  size(1000, 1333, SVG, "filename.svg");
}

void draw() {
  for (int i = 0; i < 36; i++) {
    line(width/2, height/2, 500 * i, 50 * i);
  }
  
  println("Finished.");
  exit();
}
