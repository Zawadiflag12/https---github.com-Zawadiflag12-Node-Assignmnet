// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'This project is licensed under the MIT license.';
    } else if (license === 'Apache') {
        return 'This project is licensed under the Apache license.';
    } else if (license === 'GPL') {
        return 'This project is licensed under the GPL license.';
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}.
${data.motivation}.
${data.problem}.
${data.different}.


## Installation
\`\`\`
${data.installation}
\`\`\`


## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Features
${data.feature}

## Contribute
${data.contributing}
`;
}

export default generateMarkdown;
