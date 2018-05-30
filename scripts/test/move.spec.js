const { Grid, Mower } = require('../model');
const { moveLeft, moveRight, moveForward } = require('../move');

describe('Move', () => {
  let m, grid;

  beforeEach(() => {
    m = new Mower(1, 1, 'N');
    grid = new Grid(5, 5);
  });

  it('should move to the left', () => {
    m = moveLeft(m);
    expect(m).toEqual(new Mower(1, 1, 'W'));
    ['S', 'E', 'N'].forEach(expected => {
      m = moveLeft(m);
      expect(m.dir).toBe(expected);
      return m;
    });
  });

  it('should move to the right', () => {
    m = moveRight(m);
    expect(m).toEqual(new Mower(1, 1, 'E'));
    ['S', 'W', 'N'].forEach(expected => {
      m = moveRight(m);
      expect(m.dir).toBe(expected);
      return m;
    });
  });

  it('should do nothing when reaching the grid limit', () => {
    let m = new Mower(0, 0, 'S');
    expect(moveForward(m, grid)).toBe(m);
    m = new Mower(0, 0, 'W');
    expect(moveForward(m, grid)).toBe(m);
    m = new Mower(5, 5, 'N');
    expect(moveForward(m, grid)).toBe(m);
    m = new Mower(5, 0, 'E');
    expect(moveForward(m, grid)).toBe(m);
  });

  it('should move forward', () => {
    expect(moveForward(m, grid)).toEqual(new Mower(1, 2, 'N'));
    expect(moveForward(new Mower(3, 3, 'E'), grid)).toEqual(new Mower(4, 3, 'E'));
    expect(moveForward(new Mower(3, 3, 'W'), grid)).toEqual(new Mower(2, 3, 'W'));
    expect(moveForward(new Mower(3, 3, 'S'), grid)).toEqual(new Mower(3, 2, 'S'));
  });
});
