const { absolutePath, getLinksInFileMd } = require('./md');
const { validate } = require('./options');

const mdLinks = (path, options) => new Promise((resolve) => {
  const abc = absolutePath(path);
  if (absolutePath(path) === true && options) {
    if (options.validate === true) {
      validate(abc).then((res) => resolve(res));
    } else if (absolutePath(path) === true && !options) {
      resolve(getLinksInFileMd(abc));
    }
  }
});
mdLinks('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md', { validate: true }).then((res) => {
  console.log(res);
});
module.exports = mdLinks;
