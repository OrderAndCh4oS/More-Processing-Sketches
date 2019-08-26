color bg = #150940;
void setup() {
  size(1200, 780);
  background(bg);
  strokeCap(SQUARE);
  int boxSize = 60;
  float minimum = -2;
  float maximum = boxSize + 2;
  for (int i = 0; i < 1200 / boxSize; i++) {
    for (int j = 0; j < 780 / boxSize; j++) {
      PGraphics maskImage;
      PGraphics sourceImage;
      pushMatrix();
      translate((boxSize * i), (boxSize * j));
      sourceImage = createGraphics(boxSize, boxSize);
      sourceImage.beginDraw();
      sourceImage.background(bg);
      sourceImage.noStroke();
      for (int k = 0; k < 12; k++) {
        float diameter = random(13)+3;
        switch((int)random(3)) {
        case 0:
          sourceImage.fill(#F2E74B);
          break;
        case 1:
          sourceImage.fill(#F2C849);
          break;
        case 2:
          sourceImage.fill(#F2B749);
          break;
        case 3:
          sourceImage.fill(#F29849);
          break;
        }
        switch((int)random(4)) {
        case 0:
          sourceImage.ellipse(minimum, random(maximum), diameter, diameter);
          break;
        case 1:
          sourceImage.ellipse(random(maximum), minimum, diameter, diameter);
          break;
        case 2:
          sourceImage.ellipse(random(maximum), minimum, diameter, diameter);
          break;
        case 3:
          sourceImage.ellipse(minimum, random(maximum), random(maximum), minimum);
          break;
        }
      }
      sourceImage.noFill();
      sourceImage.strokeWeight(4);
      sourceImage.stroke(#F2E74B);
      sourceImage.ellipse(boxSize/2, boxSize/2, boxSize-8, boxSize-8);
      sourceImage.endDraw();
      maskImage = createGraphics(boxSize, boxSize);
      maskImage.beginDraw();
      maskImage.noStroke();
      maskImage.fill(#ffffff);
      maskImage.ellipse(boxSize/2, boxSize/2, boxSize-6, boxSize-6);
      maskImage.endDraw();
      sourceImage.mask(maskImage);
      image(sourceImage, 0, 0);
      popMatrix();
    }
  }
  saveFrame("f#0000.png");
}
