const {
  absolutePath, getFilesMd, getLinksInFileMd,
} = require('../src/md.js');

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

// Test prueba una funcion realizada con una lib para extraer rutas dentro de dir y subdir//

describe('Asincrono - Promise(resolve, reject)', () => {
  test('Promise(resolve, reject)', () => {
    expect(typeof getFilesMd).toEqual('function');
  });
  test('Promise- .resolves', () => {
    const positiveR = ['test/out.md', 'test/test-API/other.md', 'test/test-API/test.md'];
    return expect(Promise.resolve(positiveR)).resolves.toEqual(positiveR);
  });
  test('Promise- .reject', () => {
    const negativeR = ['Error'];
    return expect(Promise.reject(negativeR)).rejects.toEqual(negativeR);
  });
});

// Test funcion extraer links //

describe('getLinksInFileMd', () => {
  it('is a function', () => {
    expect(typeof getLinksInFileMd).toBe('function');
  });
  it('Deberia retornar un array de objetos, cada uno con 3 propiedades', () => {
    const linksOutput = [{
      href: 'https://nodejs.org/es/',
      text: 'Node.js',
      file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    },
    {
      href: 'https://nodejs.org/pe',
      text: 'NODE',
      file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    },
    {
      href: 'https://nodejs.org/api/path.html',
      text: 'Path',
      file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    }];
    expect(getLinksInFileMd('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md')).toEqual(linksOutput);
  });
});
