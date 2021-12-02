function setup() {
  canvas = createCanvas(450,450);
  background('lightblue');
  canvas.parent('processing');
  //noLoop();
}

function kerk(kleur) {
  noStroke();
  fill(kleur);
  rect(0,0,100,200);
  fill('maroon');
  triangle(0,0,50,-100,100,0);
  fill('yellow');
  ellipse(50,25,40);
  fill('gray');
  rect(25,125,50,75);
}

function zon() {
  noStroke();
  fill('yellow');
  ellipse(0,0,200);
}


function draw() {
  translate(50,250);
  kerk('saddlebrown');
  translate(125,0);
  kerk('sienna');
  translate(125,-0);
  kerk('chocolate');
  translate(-275,-250);
  zon();
}