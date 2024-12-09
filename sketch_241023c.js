function setup() {
  createCanvas(750, 750);
  frameRate(60);
}


function draw() {
  var c1 = color('#04f1f1');
  var c2 = color(75, 0, 255);
  var c3 = color(mouseX, 100, mouseY);

  background(mouseX, mouseY, 100);
//for loop for my lines
  for (var i = 0; i < 480; i+= 20) {
    stroke(c3);
    line (mouseX, mouseY, 0, 260 + i);
    line (mouseX, mouseY, 480, 260 +i);
    line (mouseX, mouseY, 0, 240 + i);
    line (mouseX, mouseY, 360, 120 +i);
  }

//no fill for the triangles
  noFill();
//for loop for triangles
  for (var i = 0; i < 480; i += 40) {
    triangle (96 + i, 0, 144 +i, 60 + i, 0, 60);
    triangle (48 + i, 0, 12 +i, 30 + i, 0, 30);
  }

//fill shapes
  fill(c3);
//arc circle
  arc(240, 140, 80, 80, 0 + mouseX/100,  PI + PI + HALF_PI + mouseY/100);
//body
  fill(c3);
  quad (200, 180, 280, 180, 300, 480, 180, 480);

  fill(c3);
  text (frameCount, 360);
  textSize (30); 
  if ( frameCount >= 300) {
    ellipse (90, 90, 90, 90);
    
  }

  text(mouseX, 360, 100);
  text(mouseY, 360, 120);

}
