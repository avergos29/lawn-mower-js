const { Grid, Mower } = require('../model');

describe('Model', () => {
  it('should create a grid', () => {
    const grid = new Grid(5, 15);
    expect(grid.x).toBe(5);
    expect(grid.y).toBe(15);
  });

  it('should create a grid', () => {
    const mower = new Mower(5, 15, 'N');
    expect(mower.x).toBe(5);
    expect(mower.y).toBe(15);
    expect(mower.dir).toBe('N');
  });
});
