
void setup() {
  size(2400, 1600);
  background(#080614);
  strokeCap(SQUARE);
  int boxSize = 40;
  int minimum = -2;
  int maximum = boxSize + 2;
  for (int i = 0; i < 2400 / boxSize; i++) {
    for (int j = 0; j < 1600 / boxSize; j++) {
      PGraphics maskImage;
      PGraphics sourceImage;
      pushMatrix();
      translate((boxSize * i), (boxSize * j));
      sourceImage = createGraphics(boxSize-4, boxSize-4);
      sourceImage.beginDraw();
      for (int k = 0; k < 6; k++) {
        sourceImage.strokeWeight(random(6)+2);
        switch((int)random(2)) {
        case 0:
          sourceImage.stroke(#dd0011);
          break;
        case 1:
          sourceImage.stroke(#ededed);
          break;
        }
        switch((int)random(5)) {
        case 0:
          sourceImage.line(minimum, random(maximum), maximum, random(maximum));
          break;
        case 1:
          sourceImage.line(random(maximum), minimum, minimum, random(maximum));
          break;
        case 2:
          sourceImage.line(random(maximum), minimum, random(maximum), maximum);
          break;
        case 3:
          sourceImage.line(minimum, random(maximum), random(maximum), minimum);
          break;
        }
      }
      sourceImage.noFill();
      sourceImage.strokeWeight(4);
      sourceImage.stroke(#ededed);
      sourceImage.rect(3, 3, boxSize-9, boxSize-9);
      sourceImage.endDraw();
      maskImage = createGraphics(boxSize-4, boxSize-4);
      maskImage.beginDraw();
      maskImage.noStroke();
      maskImage.fill(#ffffff);
      maskImage.rect(2, 2, boxSize-2, boxSize-2);
      maskImage.endDraw();
      sourceImage.mask(maskImage);
      image(sourceImage, 2, 2);
      popMatrix();
    }
  }
  saveFrame("f#0000.png");
}
