let n = 7;
let d = 9;

const radius = 45;

const cols = 7;
const rows = 9;

function setup() {
  createCanvas(window.innerWidth - 20, 100 * rows);
  background(0);
  fill("white");
  noLoop();
  noStroke();
  const sqaureWidth = width / cols;
  const squareHeight = height / rows;

  for (let i = 0; i < cols * rows; i++) {
    resetMatrix();
    translate(sqaureWidth / 2, squareHeight / 2);

    translate(sqaureWidth * (i % cols), squareHeight * floor(i / cols));
    n = 1 + (i % cols);
    d = 1 + floor(i / cols);
    drawShape();

    // circle(0, 0, 50)
  }
}

function drawShape() {
  for (let i = 0; i < d * TWO_PI; i += 0.01) {
    const x = radius * cos((i * n) / d) * cos(i);
    const y = radius * cos((i * n) / d) * sin(i);

    noStroke();
    circle(x, y, 2);
  }
}
