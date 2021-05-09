const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./assets/template');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projTitle',
      message: 'Project Title?',
    }
    // {
    //     type: 'input',
    //     name: 'location',
    //     message: 'Where are you located?',
    // },
    // {
    //     type: 'input',
    //     name: 'bio',
    //     message: 'Enter a short bio:',
    // },
    // {
    //     type: 'input',
    //     name: 'gitHub',
    //     message: 'gitHub URL?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'linkedIn',
    //     message: 'LinkedIn URL?',
    //   }
  ])
  .then((data) => {
    // fs.access(filename, fs.constants.F_OK, (err) => {
    //     console.log(`${filename} ${err ? 'does not exist' : 'exists'}`);
    //   });
    const { projTitle } = data;
    fs.writeFile('README.md', template.getReadMe(projTitle, projDesc = 'test', projInst = 'test', projUsage = 'test', projImg = 'test', projCredits = 'test', projLic = 'MIT'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
