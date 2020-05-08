const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock.mock('*', 200);

fetchMock.mock('enlacefalla', 400);

module.exports = fetchMock;
