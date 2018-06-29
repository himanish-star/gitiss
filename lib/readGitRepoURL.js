const fs = require('fs');

const readOriginURL = function (dirPath) {
    const pathToConfig = dirPath + '/.git/config';
    const data = fs.readFileSync(pathToConfig).toString();
    const searchPos = data.search(RegExp('\\[remote \"origin\"'));
    const leftIndex = data.indexOf('=', searchPos);
    const rightIndex = data.indexOf('\n', leftIndex);
    const originURL = data.substring(leftIndex + 2, rightIndex);
    console.log(`Repo URL: ${originURL}`);
    return originURL;
}

const readUpstreamURL = function (dirPath) {
    const pathToConfig = dirPath + '/.git/config';
    const data = fs.readFileSync(pathToConfig).toString();
    const searchPos = data.search(RegExp('\\[remote \"upstream\"'));
    const leftIndex = data.indexOf('=', searchPos);
    const rightIndex = data.indexOf('\n', leftIndex);
    const originURL = data.substring(leftIndex + 2, rightIndex);
    console.log(`Repo URL: ${originURL}`);
    return readUpstreamURL;
}


module.exports = { readOriginURL, readUpstreamURL };
