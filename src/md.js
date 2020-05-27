const path = require('path');
const fs = require('fs');
const marked = require('marked');

// valida existencia de la ruta, retorna true o false
const routeTrue = (route) => fs.existsSync(route);

// Funcion determina ruta absoluta o relativa --> input: path, string /output: path, string

const absolutePath = (route) => (path.isAbsolute(route) === true ? route : (path.resolve(route)));

// console.log(absolutePath('test.md'));

// validar si la ruta ingresada es un directorio, retorna boleano. lstatSync : si algo existe
const isDirec = (route) => fs.lstatSync(route).isDirectory();
// console.log(isDirec('test/test-API/other.md'));

// recorrer el directorio y subdir y extrae todos los files, output: array de strings
const walkDir = (route) => {
  let arrayFile = [];
  if (!isDirec(route)) {
    arrayFile.push(route);
  } else {
    // leer el contenido de un directorio retorna un array
    const readDirectory = fs.readdirSync(route);
    readDirectory.map((read) => {
      // recorrer y leer todos los elementos del dir
      // path.join une los segmentos de ruta especificados
      const next = path.join(route, read);
      // se produce la recursividad
      // eslint-disable-next-line no-return-assign
      return (isDirec(next)) ? arrayFile = arrayFile.concat(walkDir(next)) : arrayFile.push(next);
    });
  }
  return arrayFile;
};
// console.log(walkDir('/home/ubuntu/Documentos
// /Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test'));

// Funcion filtra los archivos .md -->> output: array de strings
const mdFilter = (fileArr) => {
  const newArrayFileMd = [];
  // eslint-disable-next-line consistent-return
  fileArr.forEach((item) => {
    if (path.extname(item) === '.md') {
      return newArrayFileMd.push(item);
    }
  });
  return newArrayFileMd;
};
// console.log(mdFilter(['test/out.md', 'test/test-API/other.md', 'test/test-API/prueba.js']));

const readMD = (file) => fs.readFileSync(file, 'utf-8');
// console.log(readMD('test/out.md'));

// Funcion usa la lib marked para transformar el file en html, y con el renderizador
// personalizado (New Renderer) busca las propiedades especificas (href, text,file)
// input: path del file, string  / output: array objetos.

const getLinksInFileMd = (route) => {
  const mdFiles = walkDir(route);
  const arrayMd = mdFilter(mdFiles);
  const myRen = new marked.Renderer();
  const links = [];
  arrayMd.forEach((file) => {
    myRen.link = (href, title, text) => {
      links.push({
        href,
        text,
        file,
      });
    };
    marked(readMD(file), { renderer: myRen });
  });
  return (links);
};
// console.log(getLinksInFileMd('test'));

module.exports = {
  routeTrue, absolutePath, walkDir, mdFilter, getLinksInFileMd,
};
