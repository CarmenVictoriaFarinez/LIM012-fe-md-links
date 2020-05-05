const { getLinksInFileMd } = require('../src/mdLinks.js');

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
      href: 'https://nodejs.org/api/path.html',
      text: 'Path',
      file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    }];
    expect(getLinksInFileMd('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md')).toEqual(linksOutput);
  });
});
