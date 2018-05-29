const toLeft = {
  N: "W",
  S: "E",
  E: "N",
  W: "S"
};

const toRight = {
  N: "E",
  S: "W",
  E: "S",
  W: "N"
};

const moveX = {
  N: 0,
  S: 0,
  E: 1,
  W: -1
};

const moveY = {
  N: 1,
  S: -1,
  E: 0,
  W: 0
};

module.exports = { toLeft, toRight, moveX, moveY };
