const { absolutePath, isDirectory, getFilesMd } = require('../src/md.js');

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

// Test solo prueba una funcion que ubica files .md dentro de un directorio, no dentro de subdir//

describe('isDirectory', () => {
  it('is a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('Deberia retornar un array con los nombres de los archivos dentro del directorio', () => {
    const esperado = ['other.md', 'test.md'];
    expect(isDirectory('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/')).toEqual(esperado);
  });
});

// Test prueba una funcion realizada con una lib para extraer rutas dentro de dir y subdir//

describe('getFilesMd ', () => {
  it('is a function', () => {
    expect(typeof getFilesMd).toBe('function');
  });
  it('Deberia retornar un array con las rutas de los archivos .md', (done) => {
    const getDir = ('test', (callback) => {
      const esperado1 = ['test/out.md', 'test/test-API/other.md', 'test/test-API/test.md'];
      expect(getFilesMd('test', callback)).toBe(esperado1);
      done();
      getDir('test', callback);
    });
  });
});
