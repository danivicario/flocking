const flock = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let index = 0; index < 1000; index++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);

  for (let boid of flock) {
    boid.update();
    boid.show();
  }
}
