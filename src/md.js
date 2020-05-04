const path = require('path');
const fs = require('fs');
const glob = require('glob');

// Funcion determina ruta absoluta o relativa --> output: string

const absolutePath = (route) => {
  if (path.isAbsolute(route) === true) {
    return route;
  } return (path.resolve(route));
};

// Funcion valida que sea directorio y filtra los archivos .md -->> output: array de strings

const isDirectory = (str) => {
  const dir = fs.readdirSync(str); // output -->> array con strings
  const listFiles = dir.filter((item) => path.extname(item) === '.md');
  return (listFiles);
};

// Funcion usa la lib glob para extraer todas las rutas de los files .md dentro de dir y subdir
// output: array de strings

const getFilesMd = (src) => new Promise((resolve, reject) => {
  glob(`${src}/**/*.md`, (err, files) => {
    if (err) {
      reject(err);
    }
    resolve(files);
  });
});

getFilesMd('test').then((files) => {
console.log(files);
});

module.exports = { absolutePath, isDirectory, getFilesMd };
