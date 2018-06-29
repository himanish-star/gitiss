const fs = require('fs');
const path = require('path');

const readToken = function () {
  const effPath = path.join(__dirname, '../githubToken');
  const token = fs.readFileSync(effPath);
  return token;
}

const writeToken = function (token) {
  const effPath = path.join(__dirname, '../githubToken');
  fs.writeFileSync(effPath, token);
}

module.exports = { readToken, writeToken };
