function getReadMe(projTitle, projDesc, projInst, projUsage, projImg, projTest, projLic, projGitUser, projEmail) {
    const readMe = `
# ${projTitle}
![GitHub license](https://img.shields.io/badge/license-${projLic}-brightgreen.svg)

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

## Contributions
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

## Testing
To test, run 'npm test -- ${projTest}'.

## License
This project is covered under a/an ${projLic} license. For more information see GitHub documentation on licensing a project [here](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).

## Questions
​For questions, get in touch on [GitHub](https://github.com/${projGitUser}/) or email me at [${projEmail}](mailto:${projEmail}).
    `
    return readMe;
};

module.exports = {
    getReadMe,
  };