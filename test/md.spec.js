const { absolutePath, directoryOrfile, getDirectories } = require('../src/md.js');

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
    const esperado = ['other.md', 'test.md'];
    expect(directoryOrfile('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/')).toEqual(esperado);
  });
});

describe('getDirectories', () => {
  it('is a function', () => {
    expect(typeof getDirectories).toBe('function');
  });
  it('Deberia retornar un array con las rutas de los archivos .md', (done) => {
    const getDir = (callback) => {
      const esperado1 = ['test/out.md', 'test/test-API/other.md', 'test/test-API/test.md'];
      expect(getDirectories(callback)).toContain(esperado1);
      done();
    };
    getDir();
  });
});
