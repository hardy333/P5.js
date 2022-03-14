class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = Math.sign(Math.random() - 0.5);
    this.speedY = Math.sign(Math.random() - 0.5);
    this.hue = Math.floor(Math.random(0) * 360);
    this.color = `hsl(${this.hue}, 100%, 50%)`;
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, 2 * this.radius);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  checkCollision() {
    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.speedX *= -1;
    }

    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.speedY *= -1;
    }
  }
}
