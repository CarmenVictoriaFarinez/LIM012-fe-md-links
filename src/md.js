const path = require('path');
const fs = require('fs');
const glob = require('glob');

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

const getDirectories = (src, callback) => {
  glob(`${src}/**/*.md`, callback);
};
getDirectories('test', (err, res) => {
  if (err) {
    return ('Error', err);
  }
  return res;
});

module.exports.getDirectories = getDirectories;
module.exports.absolutePath = absolutePath;
module.exports.directoryOrfile = directoryOrfile;
