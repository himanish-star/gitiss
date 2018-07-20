const fs = require('fs');

const readData = function () {
  const text = fs.readFileSync(__dirname + '/../commit_message_file.txt').toString().trim();
  const pos1 = text.search('TITLE:');
  const pos2 = text.search('#### GITISS');
  const pos3 = text.search('BODY:');
  if(pos1!=0) {
    return { title: "", body: ""};
  }
  if(pos2 > pos3) {
    return {
      title: text.substring(pos1+6, pos3).trim(),
      body: text.substring(pos3+5, pos2).trim()
    }
  } else {
    return {
      title: text.substring(pos1+6, pos2).trim(),
      body: ""
    }
  }
};

module.exports = { readData };
