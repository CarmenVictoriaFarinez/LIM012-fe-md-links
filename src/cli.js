const process = require('process');
const mdLinks = require('./index');
// const { getLinksStats, getBrokenLinksStats } = require('./options');

// extrayendo de la cadena los 2 argumentos primeros de la linea de comandos: node, nombrearchivo//
const argv = process.argv.slice(2);
const path = argv[0];

const opciones = (path, options) => {
switch (argv.length) {
case 0:
    if (options === '--validate');
    return mdLinks(path, {validate: true})
      .then((response) => response.forEach((links) => console.log(`\n Path :${links.file}
    \n Link : ${links.href}  \n Texto : ${links.text}`)));
    break;
  // no default
}
};
module.exports = opciones;