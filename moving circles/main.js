const circlesArr = [];

function setup() {
  createCanvas(window.innerWidth - 100, window.innerHeight - 100);
  createCircles();
}

let prevTime = performance.now()
let currrTime = performance.now()
console.log(prevTime)


function draw() {
  noLoop()
  let diff = performance.now() - prevTime
  prevTime = performance.now()
  console.log(diff)
  console.log("Fps is: ", 1000/diff)

  background(0);
  for (let i = 0; i < circlesArr.length; i++) {
    circlesArr[i].checkCollision();
    circlesArr[i].draw();
    circlesArr[i].move();
  }
}

function createCircles() {
  for (let i = 0; i < 500; i++) {
    const radius = Math.floor(random(2, 10));

    circlesArr.push(
      new Circle(
        random(radius + 10, width - radius - 10),
        random(radius + 10, height - radius - 10),
        radius
      )
    );
  }
}
