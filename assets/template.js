function getReadMe(projTitle, projDesc, projInst, projUsage, projImg, projTest, projLic, projGitUser) {
    const readMe = `
# ${projTitle}
## Description
${projDesc}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing Information](#testing)
- [License](#license)
- [Questions](#questions)
## Installation
${projInst}
## Usage
${projUsage}

![alt text](assets/images/${projImg})

## How to Contribute
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

## Testing Information
To test, run 'npm test -- ${projTest}'.

## License
![GitHub license](https://img.shields.io/badge/license-${projLic}-brightgreen.svg)

## Questions
​For questions, get in touch on [GitHub](https://github.com/${projGitUser}/).
    `
    return readMe;
};

module.exports = {
    getReadMe,
  };