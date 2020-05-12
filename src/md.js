const path = require('path');
const fs = require('fs');
const glob = require('glob');
const marked = require('marked');

// Funcion determina ruta absoluta o relativa --> input: path, string /output: path, string

const absolutePath = (route) => {
  if (path.isAbsolute(route) === true) {
    return route;
  } return (path.resolve(route));
};

// Funcion usa la lib glob para extraer todas las rutas de los files .md dentro de dir y subdir
// input: path, string  / output: array de strings

const getFilesMd = (src) => new Promise((resolve, reject) => {
  glob(`${src}/**/*.md`, (err, files) => {
    if (err) {
      reject(err);
    }
    resolve(files);
  });
});
(getFilesMd('test').then((files) => (files)));

// Funcion usa la lib marked para transformar el file en html, y con el renderizador
// personalizado (New Renderer) busca las propiedades especificas (href, text,file)
// input: path del file, string  / output: array objetos.

const getLinksInFileMd = (file) => {
  const mdFiles = fs.readFileSync(file).toString();
  const myRen = new marked.Renderer();
  const links = [];

  myRen.link = (href, title, text) => {
    links.push({
      href,
      text,
      file,
    });
  };
  marked(mdFiles, { renderer: myRen });
  return (links);
};


module.exports = {
  absolutePath, getFilesMd, getLinksInFileMd,
};
