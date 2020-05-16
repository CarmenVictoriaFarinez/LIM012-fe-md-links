const process = require('process');
const mdLinks = require('./index');
const { getLinksStats, getBrokenLinksStats } = require('./options');

// extrayendo de la cadena los 2 argumentos primeros de la linea de comandos: node, nombrearchivo//
const argv = process.argv.slice(2);
const path = argv[0];
const options = {
  validate: false,
  stats: false,
};
const optionValidate = argv[1];
const optionStats = argv[2];

if (argv.length) {
  mdLinks(path, options)
    .then((response) => response.forEach((links) => {
      console.log(`\n Path :${links.file}\n Link : ${links.href}  \n Texto : ${links.text}`);
    }));
  if (optionValidate === '--validate') {
    options.validate = true;
    mdLinks(path, options)
      // eslint-disable-next-line array-callback-return
      .then((response) => response.map((links) => {
        console.log(`\n Path :${links.file} \n Link : ${links.href}  ${links.status}  ${links.message} 
      \n texto : ${links.text} `);
      }));
  }
  if (optionValidate === '--validate' && optionStats === '--stats') {
    options.validate = true;
    options.stats = true;
    Promise.all([getLinksStats(path), getBrokenLinksStats(path)])
      .then((res) => res.forEach((properties) => console.log(properties)))
      .catch((error) => console.log(error));
  }
}

mdLinks('./test/test-API/test.md', { stats: true }).then((res) => console.log(res));
