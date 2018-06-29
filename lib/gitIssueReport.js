const https = require('https');

const fileIssue = function (url, token) {
  const postData = {
    'title': 'demo test level 3',
    'body': 'level 3 tests in progress.'
  }
  const options = {
    host: 'api.github.com',
    path: `/repos/${url.split('https://github.com/')[1].split('.git')[0]}/issues`,
    method: 'POST',
    headers: {
      'Authorization': `token ${token}`,
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
