const path = require('path');

const absolutePath = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  } return (path.resolve(ruta));
};
module.exports.absolutePath = absolutePath;
