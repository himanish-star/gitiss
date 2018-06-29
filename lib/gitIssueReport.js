const https = require('https');

const fileIssue = function (url, token, postData) {
  const options = {
    host: 'api.github.com',
    path: `/repos/${url.split('https://github.com/')[1].split('.git')[0]}/issues`,
    method: 'POST',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'gitiss (a nodejs built CLI)'
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
