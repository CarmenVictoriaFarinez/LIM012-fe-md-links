const { routeTrue, absolutePath, getLinksInFileMd } = require('./md');
const { validate } = require('./options');

const mdLinks = (path, options) => new Promise((resolve) => {
  const absolute = absolutePath(path);
  const verifpath = routeTrue(absolute);
  if (verifpath === true && options) {
    if (options.validate === true) {
      validate(absolute).then((res) => resolve(res));
    } else if (options.validate === false) {
      resolve(getLinksInFileMd(absolute));
    }
  }
});

// mdLinks('./test/out.md', { validate: true })
//  .then((res) => console.log(res));

module.exports = mdLinks;
