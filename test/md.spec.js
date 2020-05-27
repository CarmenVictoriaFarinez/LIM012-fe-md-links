const {
  absolutePath, walkDir, getLinksInFileMd,
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

// Test prueba una funcion usada para extraer rutas dentro de dir y subdir//
describe('walkDir ', () => {
  it('is a function', () => {
    expect(typeof walkDir).toBe('function');
  });
  it('Deberia retornar un array de strings', () => {
    const filesOutput = [
      '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/md.spec.js',
      '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/options.spec.js',
      '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/out.md',
      '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/other.md',
      '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/prueba.js',
      '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    ];
    expect(walkDir('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test')).toEqual(filesOutput);
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
