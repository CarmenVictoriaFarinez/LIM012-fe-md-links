const { validate } = require('./options');
const { getLinksInFileMd } = require('./md');

const option = {
  validate: false,
};

// eslint-disable-next-line consistent-return
const mdLinks = (path, options) => {
  // si la opcion es v, debe retornar array de obj con 5 propiedades
  if (option.validate !== options) {
    return validate(path);
  } // si es false, debe retornar array con 3 propiedades
  if (option.validate === undefined) {
    return new Promise((resolve) => resolve(getLinksInFileMd(path)));
  }
};

module.exports = mdLinks;
