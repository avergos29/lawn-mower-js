class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Mower {
  constructor(x, y, dir) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.dir = dir;
  }
}

module.exports = { Mower, Grid };
