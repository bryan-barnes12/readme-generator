const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./assets/template');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projTitle',
      message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'projDesc',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'projInst',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'projUsage',
        message: 'Usage instructions:',
      },
      {
        type: 'input',
        name: 'projImg',
        message: 'Image link (file name):',
      },
      {
        type: 'input',
        name: 'projTest',
        message: 'Testing file name:',
      },
      {
        type: 'list',
        name: 'projLic',
        message: 'Choose your project license:',
        choices: [
            'MIT',
            'GPLv2',
            'Apache',
            'Other'
        ]
      },
      {
        type: 'input',
        name: 'projGitUser',
        message: 'GitHub username:',
      },
      {
        type: 'input',
        name: 'projEmail',
        message: 'Email address:',
      }
  ])
  .then((data) => {
    const { projTitle, projDesc, projInst, projUsage, projImg, projTest, projLic, projGitUser, projEmail } = data;
    fs.writeFile('README.md', template.getReadMe(projTitle, projDesc, projInst, projUsage, projImg, projTest, projLic, projGitUser, projEmail), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
