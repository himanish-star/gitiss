#!/usr/bin/env node

let program = require('commander');
const path = require('path');
const { readOriginURL, readUpstreamURL } = require('./lib/readGitRepoURL.js');
const { fileIssue } = require('./lib/gitIssueReport.js');
const { readToken, writeToken } = require('./lib/readToken.js');

process.env.githubToken = readToken();
program
  .version('0.0.1');

program
  .command('token <token>')
  .action(async function (token) {
    await writeToken(token);
    process.exit();
  });

program
  .command('file <title> [<body>]')
  .option('-o, --origin', 'file issue in the master(origin) repo')
  .option('-u, --upstream', 'file issue in the upstream(parent) repo')
  .action(async function (title, body, cmd) {
    if(!process.env.githubToken) {
      console.log('Please set your githubToken:\n' + 'gitiss token <token>');
      process.exit();
    }
    if(cmd.origin) {
      const url = await readOriginURL(process.cwd());
      await fileIssue(url, process.env.githubToken, {
        title: title,
        body: body
      });
    } else if(cmd.upstream) {
      const url = await readUpstreamURL(process.cwd());
      await fileIssue(url, process.env.githubToken, {
        title: title,
        body: body
      });
    }
  });

program
  .parse(process.argv);
