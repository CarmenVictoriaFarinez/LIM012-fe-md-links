const path = require('path');

const input = require('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test-first.md');

describe('mdlinks', () => {
  it('is a function', () => {
    expect(typeof mdlinks).toBe('function');
  });
  it('Deberia retornar un boleano, true', () => {
    const output = true;
    expect(path(input)).toEqual(output);
  });
});
