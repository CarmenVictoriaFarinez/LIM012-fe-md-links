const fetchMock = require('../__mocks__/node-fetch');
const { validate } = require('../src/options.js');

describe('validate', () => {
  it('is a function', () => {
    expect(typeof validate).toBe('function');
  });
  it('Deberia retornar un array de objetos, cada uno con 5 propiedades', (done) => {
    fetchMock
      .mock()
      .mock();
    const testLink = validate('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md');
    testLink.then((response) => {
      const validateOutput = [{
        href: 'https://nodejs.org/es/',
        text: 'Node.js',
        file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
        status: 200,
        ok: 'ok',
      },
      {
        href: 'https://nodejs.org/api/path.html',
        text: 'Path',
        file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
        status: 200,
        ok: 'ok',
      }];
      expect(validate('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md')).toEqual(validateOutput);
      done();
    });
  });
});
