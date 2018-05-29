const fs = require("fs-extra");
const { Grid, Mower } = require("./model");
const { toLeft, toRight, moveX, moveY } = require("./utilities");

let grid, mower;

const processFirstLine = line => {
  const positions = line.split(" ");
  return new Grid(positions[0], positions[1]);
};

const processMower = line => {
  const values = line.split(" ");
  return new Mower(values[0], values[1], values[2]);
};

const processActions = line => {
  line.split("").forEach(processAction);
  console.log(`${mower.x} ${mower.y} ${mower.dir}`);
};

const processAction = action => {
  switch (action) {
    case "L":
      mower = moveLeft(mower);
      break;
    case "R":
      mower = moveRight(mower);
      break;
    case "F":
      mower = moveForward(mower);
      break;
    default:
      throw new Error("Unknown action '" + action + "'");
  }
};

const moveLeft = mower => new Mower(mower.x, mower.y, toLeft[mower.dir]);
const moveRight = mower => new Mower(mower.x, mower.y, toRight[mower.dir]);

const canMove = (x, y, xMax, yMax, dir) => {
  switch (dir) {
    case "N":
      return y < yMax;
    case "S":
      return y > 0;
    case "E":
      return x < xMax;
    case "W":
      return x > 0;
  }
  throw new Error("Unknown direction " + dir);
};

const move = mower =>
  new Mower(moveX[mower.dir] + mower.x, moveY[mower.dir] + mower.y, mower.dir);
const moveForward = mower =>
  canMove(mower.x, mower.y, grid.x, grid.y, mower.dir) ? move(mower) : mower;

fs.readFile(process.argv[2])
  .then(data =>
    data
      .toString()
      .split("\n")
      .forEach((line, index, arr) => {
        if (index == 0) {
          grid = processFirstLine(line);
        } else if (index % 2 == 1) {
          mower = processMower(line);
        } else {
          processActions(line);
        }
      })
  )
  .catch(err => console.error(err));
