const https = require('https');

const fileIssue = function (url, token, postData) {
  let partsOfURL = url.split('https://github.com/')[1].split('.git');
  let modifiedPath="";

  if(partsOfURL.length >= 2) {
    for(let i = 0; i < partsOfURL.length - 1; i ++) {
      modifiedPath += partsOfURL[i];
      if(i != partsOfURL.length -2)
        modifiedPath += ".git";
    }
  } else {
    modifiedPath=partsOfURL[0];
  }
  const options = {
    host: 'api.github.com',
    path: `/repos/${modifiedPath}/issues`,
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
