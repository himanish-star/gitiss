#!/usr/bin/env node

let program = require('commander');
const { readOriginURL } = require('./lib/readGitRepoURL.js');

program
  .version('0.0.1')

program
  .command('fiss')
  .option('-o, --origin', 'file issue in the master(origin) repo')
  .option('-u, --upstream', 'file issue in the upstream(parent) repo')
  .action(function (cmd) {
    if(cmd.origin) {
      readOriginURL(process.cwd());
    }
  })

program
  .parse(process.argv)
