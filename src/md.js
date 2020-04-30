const path = require('path');
const fs = require('fs');

const absolutePath = (route) => {
  if (path.isAbsolute(route) === true) {
    return route;
  } return (path.resolve(route));
};

const directoryOrfile = (str) => {
  const dir = fs.readdirSync(str); // output -->> array con strings
  const listFiles = dir.filter((item) => path.extname(item) === '.md');
  return listFiles;
};


module.exports.absolutePath = absolutePath;
module.exports.directoryOrfile = directoryOrfile;
