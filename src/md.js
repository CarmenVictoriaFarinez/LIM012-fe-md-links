const path = require('path');
const fs = require('fs');

const absolutePath = (route) => {
  if (path.isAbsolute(route) === true) {
    return route;
  } return (path.resolve(route));
};

const directoryOrfile = (str) => {
  const dir = fs.readdirSync(str);
  return dir;
};

module.exports.absolutePath = absolutePath;
module.exports.directoryOrfile = directoryOrfile;
