function getReadMe(projTitle, projDesc, projInst, projUsage, projImg, projCredits, projLic) {
    const readMe = `
# ${projTitle}
## Description
${projDesc}
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${projInst}
## Usage
${projUsage}
    ![alt text](assets/images/${projImg})
## Credits
${projCredits}
## License
![GitHub license](https://img.shields.io/badge/license-${projLic}-brightgreen.svg)
    `
    return readMe;
};

module.exports = {
    getReadMe,
  };