
void setup() {
  size(2400, 1600);
  background(#080614);
  strokeCap(SQUARE);
  int boxSize = 40;
  int minimum = 2;
  int maximum = boxSize - 4;
  for (int i = 0; i < 2400 / boxSize; i++) {
    for (int j = 0; j < 1600 / boxSize; j++) {
      PGraphics maskImage;
      PGraphics sourceImage;
      pushMatrix();
      translate((boxSize * i) + 2, (boxSize * j) + 2);
      sourceImage = createGraphics(16, 16);
      sourceImage.beginDraw();
      for (int k = 0; k < 6; k++) {
        pushMatrix();
        translate(1, 1);
        strokeWeight(random(6)+2);
        switch((int)random(2)) {
        case 0:
          stroke(#dd0011);
          break;
        case 1:
          stroke(#ededed);
          break;
        }
        switch((int)random(5)) {
        case 0:
          line(minimum, random(maximum), maximum, random(maximum));
          break;
        case 1:
          line(random(maximum), minimum, minimum, random(maximum));
          break;
        case 2:
          line(random(maximum), minimum, random(maximum), maximum);
          break;
        case 3:
          line(minimum, random(maximum), random(maximum), minimum);
          break;
        }
        popMatrix();
      }
      sourceImage.endDraw();

      maskImage = createGraphics(16, 16);
      maskImage.beginDraw();
      noFill();
      strokeWeight(2);
      stroke(#ededed);
      rect(2, 2, boxSize-4, boxSize-4);
      maskImage.endDraw();
      sourceImage.mask(maskImage);
      image(sourceImage, 0, 0);
      popMatrix();
    }
  }
  saveFrame("f#0000.png");
}
