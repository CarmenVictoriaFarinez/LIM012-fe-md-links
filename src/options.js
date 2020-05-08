const fetch = require('node-fetch');
const { getLinksInFileMd } = require('./md.js');

const validate = (route) => {
  const linksMd = getLinksInFileMd(route);
  const validateLinks = linksMd.map((element) => new Promise((resolve) => fetch(element.href)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        element.status = response.status;
        element.message = response.statusText;
        resolve(element);
      } else {
        element.status = response.status;
        element.message = 'Fail';
        resolve(element);
      }
    })
    .catch(() => {
      element.status = 'Error';
      element.message = 'Fail';
      resolve(element);
    })));
  return Promise.all(validateLinks);
};

validate('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md');

module.exports = validate;
