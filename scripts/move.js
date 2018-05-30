const { Mower } = require('./model');
const { moveX, moveY, toLeft, toRight } = require('./utilities');

const moveLeft = mower => new Mower(mower.x, mower.y, toLeft[mower.dir]);
const moveRight = mower => new Mower(mower.x, mower.y, toRight[mower.dir]);

const canMove = (x, y, xMax, yMax, dir) => {
  switch (dir) {
    case 'N':
      return y < yMax;
    case 'S':
      return y > 0;
    case 'E':
      return x < xMax;
    case 'W':
      return x > 0;
  }
  throw new Error('Unknown direction ' + dir);
};

const move = mower =>
  new Mower(moveX[mower.dir] + mower.x, moveY[mower.dir] + mower.y, mower.dir);

const moveForward = (mower, grid) =>
  canMove(mower.x, mower.y, grid.x, grid.y, mower.dir) ? move(mower) : mower;

module.exports = { move, moveForward, moveLeft, moveRight };
