const mdlinks = require('path');

const input = require('./test-API/test-first.md');

describe('mdlinks', () => {
  it('is a function', () => {
    expect(typeof mdlinks).toBe('function');
  });
  it('Deberia retornar un boleano, true', () => {
    const output = true;
    expect(mdlinks(input)).toEqual(output);
  });
});
