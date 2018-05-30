const { Grid, Mower } = require('./model');
const { moveLeft, moveRight, moveForward } = require('./move');

const processFirstLine = line => {
  const positions = line.split(' ');
  return new Grid(positions[0], positions[1]);
};

const processMower = line => {
  const values = line.split(' ');
  return new Mower(values[0], values[1], values[2]);
};

const processActions = (mower, grid, line) => {
  let m = mower;
  line.split('').forEach(action => (m = processAction(m, grid, action)));
  console.log(`${m.x} ${m.y} ${m.dir}`);
};

const processAction = (mower, grid, action) => {
  switch (action) {
    case 'L':
      return moveLeft(mower);
    case 'R':
      return moveRight(mower);
    case 'F':
      return moveForward(mower, grid);
    default:
      throw new Error("Unknown action '" + action + "'");
  }
};

module.exports = { processActions, processFirstLine, processMower };
