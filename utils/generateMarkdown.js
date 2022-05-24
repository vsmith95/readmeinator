// packages
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  const apacheBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  const wtfplBadge = '[![License] (http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)](http://www.wtfpl.net)';
  const ccBadge = '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
  let badge = '';
  if(license === 'MIT') {
    badge = mitBadge;
  } else if (license === 'Apache license 2.0') {
    badge = apacheBadge;
  } else if (license === 'Do What The F*ck You Want To Public License') {
    badge = wtfplBadge;
  } else if (license === 'Creative Commons Attribution 4.0') {
    badge = ccBadge;
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return`
  # ${answers.title}

  ##Description:
  ###${answers.description}

  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [Contribution](#contribution)
  ###  * [Testing](#instructions)
  ###  * [Reach Out](#reach)
  ###  * [License](#license)
  ## Installation Instructions:
  ### ${answers.installation}
  ## Usage:
  ### ${answers.usage}
  ## Contribution Guidelines:
  ### ${answers.contributions}
  ## Testing Instructions:
  ### ${answers.instructions}
  ## Reach Out:
  ### Github: https://github.com/${answers.username}
  ### or
  ### Email: ${answers.email}

  ## ${renderLicenseSection(answers.license)} ${renderLicenseBadge(answers.license)}
`;
}

module.exports = generateMarkdown;
