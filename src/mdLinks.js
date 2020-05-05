const fs = require('fs');
const marked = require('marked');

const getLinksInFileMd = (str) => {
  const mdFiles = fs.readFileSync(str).toString();
  const myRen = new marked.Renderer();
  const links = [];

  myRen.link = (href, text, file) => {
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
