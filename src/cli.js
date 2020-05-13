const process = require('process');
const mdLinks = require('./index');
// extrayendo de la cadena los 2 argumentos primeros de la linea de comandos: node, nombrearchivo//
const argv = process.argv.slice(2);

switch (argv.length) {
case 0:
  console.log('Ingrese una ruta');
  break;
  // no default

case 1:

  mdLinks(argv[0])
    .then((response) => response.forEach((links) =>
      console.log(`\n Path :${links.file} \n Link : ${links.href}  \n Texto : ${links.text}`)));
  break;
  // no default
}
