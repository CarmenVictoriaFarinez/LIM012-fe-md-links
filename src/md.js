const mdLinks = require('path');

if (mdLinks.isAbsolute('') === true) {
  console.log('La ruta es absoluta');
} else {
  console.log(mdLinks.resolve(''));

  module.exports.path = mdLinks;
}
