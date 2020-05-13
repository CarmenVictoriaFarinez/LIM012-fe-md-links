const fetchMock = require('../__mocks__/node-fetch');
const {
  validate, getLinksStats, getBrokenLinksStats,
} = require('../src/options');

const validateOutput = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://nodejs.org/pe',
    text: 'NODE',
    file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    status: 404,
    message: 'Fail',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md',
    status: 200,
    message: 'OK',
  },
];

const path = '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md';

describe('validate', () => {
  test('Debería de ser una función', () => {
    expect(typeof validate).toBe('function');
  });

  test('Deberia retornar un objeto con 5 propiedades', (done) => new Promise((resolve) => {
    fetchMock
      .mock('https://nodejs.org/es/', 200)
      .mock('https://nodejs.org/pe', 404)
      .mock('https://nodejs.org/api/path.html', 200)
      .mock('*', 200);
    validate(path)
      .then((response) => {
        expect(response).toEqual(validateOutput);
        resolve(response);
        done();
      })
      .catch(() => done());
  }));
});
/* const error = {
  errno: -21,
  syscall: 'read',
  code: 'EISDIR',
};

describe('Asincrono - Promise(resolve, reject)', () => {
  test('Promise - Promise(resolve, reject)', (done) => {
    fetchMock
      .mock('https://nodejs.org/es/', 200)
      .mock('https://nodejs.org/pe', 404)
      .mock('https://nodejs.org/api/path.html', 200)
      .mock('*', 200);
    validate(path).then((arrayObj) => {
      expect(arrayObj).toEqual(validateOutput);
      done();
    });
  });
  test('Promise - .resolves', () => expect(validate(path)).resolves.toEqual(validateOutput));
  test('Promise - .rejects', () => {
    const pathBad = '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp';
    return expect(validate(pathBad)).rejects.toEqual(error);
  });
}); */

describe('getLinksStats', () => {
  test('Debería de ser una función', () => {
    expect(typeof getLinksStats).toBe('function');
  });
  test('Debería retornar el total de links encontrados y la cantidad de links únicos', (done) => new Promise((resolve) => {
    getLinksStats(path)
      .then((response) => {
        expect(response).toEqual('Total: 3 Unique: 3');
        resolve(response);
        done();
      })
      .catch(() => done());
  }));
});

describe('getBrokenLinksStats', () => {
  test('Debería ser una función', () => {
    expect(typeof getBrokenLinksStats).toBe('function');
  });
  test('Debería retornar el total de links rotos', (done) => new Promise((resolve) => {
    getBrokenLinksStats(path)
      .then((response) => {
        expect(response).toEqual('Broken: 1');
        resolve(response);
        done();
      })
      .catch(() => {
        done();
      });
  }));
});
