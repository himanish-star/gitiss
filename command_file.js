#!/usr/bin/env node

let program = require('commander');
const { readOriginURL, readUpstreamURL } = require('./lib/readGitRepoURL.js');
const { fileIssue } = require('./lib/gitIssueReport.js');

program
  .version('0.0.1');

if(!process.env.githubToken) {
  console.log('Please set your githubToken = "token" as an environment variable');
  process.exit();
}

program
  .command('file')
  .option('-o, --origin', 'file issue in the master(origin) repo')
  .option('-u, --upstream', 'file issue in the upstream(parent) repo')
  .action(async function (cmd) {
    if(cmd.origin) {
      const url = await readOriginURL(process.cwd());
      await fileIssue(url, process.env.githubToken);
    } else if(cmd.upstream) {
      const url = await readUpstreamURL(process.cwd());
      await fileIssue(url, process.env.githubToken);
    }
  });

program
  .parse(process.argv);
