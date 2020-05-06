const fs = require('fs');
const marked = require('marked');

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
  return links;
};

module.exports.getLinksInFileMd = getLinksInFileMd;
