const { absolutePath, directoryOrfile } = require('../src/md.js');

describe('absolutePath', () => {
  it('is a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
  it('Deberia retornar un string con la ruta absoluta', () => {
    const output = '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/src/md.js';
    expect(absolutePath('./src/md.js')).toBe(output);
  });
  it('Deberia retornar un string con la entrada actual', () => {
    const output = '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/src/md.js';
    expect(absolutePath('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/src/md.js')).toBe(output);
  });
});

describe('directoryOrfile ', () => {
  it('is a function', () => {
    expect(typeof directoryOrfile).toBe('function');
  });
  it('Deberia retornar un array con los nombres de los archivos dentro del directorio', () => {
    const esperado = ['test.js', 'test.md'];
    expect(directoryOrfile('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/')).toEqual(esperado);
  });
});
