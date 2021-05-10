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
      }
  ])
  .then((data) => {
    // fs.access(filename, fs.constants.F_OK, (err) => {
    //     console.log(`${filename} ${err ? 'does not exist' : 'exists'}`);
    //   });
    const { projTitle, projDesc, projInst, projUsage, projImg, projTest, projLic, projGitUser } = data;
    fs.writeFile('README.md', template.getReadMe(projTitle, projDesc, projInst, projUsage, projImg, projTest, projLic, projGitUser), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
