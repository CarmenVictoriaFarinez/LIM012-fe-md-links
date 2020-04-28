import {
  absolutePath,
} from '../src/md';

describe('absolutePath', () => {
  it('is a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
  it('Deberia retornar un string con la ruta absoluta', () => {
    const output = '/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/src/md.js';
    expect(absolutePath('./md.js')).toEqual(output);
  });
});
