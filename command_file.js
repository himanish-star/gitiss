#!/usr/bin/env node

let program = require('commander');
const path = require('path');
const { readOriginURL, readUpstreamURL } = require('./lib/readGitRepoURL.js');
const { fileIssue } = require('./lib/gitIssueReport.js');
const { readToken, writeToken } = require('./lib/readToken.js');
const { readData } = require('./lib/readTitleBodyFromEditor.js')

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
  .command('finline <title> [<body>]')
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
  .command('feditor')
  .action(function (cmd) {
    const fs = require('fs');
    fs.writeFileSync(__dirname + '/commit_message_file.txt',
    '\n\n\n#### GITISS #### INSTRUCTIONS Below:\n\n' +
    '** Type `TITLE:` and then enter the title(compulsory)\n' +
    '** Type `BODY:` and then enter the body(not compulsory)\n\n' +
    '** Example: \nTITLE: sample_title \nBODY: body_text\n\n' +
    '** When done editing press `Esc` and type `:wq`\n');

    const child_process = require('child_process');
    const vim = child_process.spawn('vim', [__dirname + '/commit_message_file.txt'], { stdio: 'inherit' });
    vim.on('error', () => {
      console.log('It seems there is no vim installed \n\nRun: sudo apt install vim\n');
    })
    vim.on('close', async (code) => {
      console.log('process exited with code: ' + code);
      const data2 = await readData();
      console.log(data2);
    });
  });

program
  .parse(process.argv);
