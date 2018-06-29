#!/usr/bin/env node

let program = require('commander');
const { readOriginURL, readUpstreamURL } = require('./lib/readGitRepoURL.js');
const { fileIssue } = require('./lib/gitIssueReport.js');

program
  .version('0.0.1');

program
  .command('fiss')
  .option('-o, --origin', 'file issue in the master(origin) repo')
  .option('-u, --upstream', 'file issue in the upstream(parent) repo')
  .action(async function (cmd) {
    if(cmd.origin) {
      const url = await readOriginURL(process.cwd());
      await fileIssue(url);
    } else if(cmd.upstream) {
      const url = await readUpstreamURL(process.cwd());
      await fileIssue(url);
    }
  });

program
  .parse(process.argv);
