const https = require('https');

const fileIssue = function (url, token) {
  const postData = {
    'title': 'demo test level 2',
    'body': 'happy to see things working well! I love JavaScript'
  }
  const options = {
    host: 'api.github.com',
    path: `/repos/${url.split('https://github.com/')[1].split('.git')[0]}/issues`,
    method: 'POST',
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
      console.log('\nThe issue has been reported successfully and can be viewed at:\n' +
      JSON.parse(JSONData).html_url);
    })
  });
  req.write(JSON.stringify(postData));
  req.end();
}

module.exports = { fileIssue };
