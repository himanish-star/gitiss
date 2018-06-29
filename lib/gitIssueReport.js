const https = require('https');

const fileIssue = function (url, token) {
  const data = {
    'title': 'demo test'
  }
  const options = {
    host: 'api.github.com',
    path: '/repos/himanish-star/online-scraper-and-JSON-formatter',
    method: 'GET',
    headers: {
      'Authorization': 'token c135eac3ede4e6da9ecec4220c13ec3cc147c2f5',
      'Content-Type': 'application/json',
      'User-Agent': 'himanish-star'
    }
  }
  const req = https.request(options, (res) => {
    let JSONData = '';
    res.on('data', (chunk) => {
      JSONData += chunk.toString();
    })
    res.on('end', () => {
      console.log(JSON.parse(JSONData));
    })
  });
  // req.write(JSON.stringify(data));
  req.end();
}

module.exports = { fileIssue };
