const path = require('path');

const absolutePath = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ('La ruta es absoluta');
  } return (path.resolve(ruta));
};
module.exports.absolutePath = absolutePath;
