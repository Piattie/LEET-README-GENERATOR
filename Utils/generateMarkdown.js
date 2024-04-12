// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license || license === 'None') return '';
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license || license === 'None') return '';
    return `https://choosealicense.com/licenses/${encodeURIComponent(license).toLowerCase()}/`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${data.includeScreenshots ? `![Screenshot](${data.screenshotPath})` : ''}

## Contribution
${data.contribution ? data.contributionGuidelines : 'N/A'}

## Tests
${data.tests ? data.testInstructions : 'N/A'}

## License
This project is licensed under the ${data.license} license. [License Link](${renderLicenseLink(data.license)})

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).

GitHub Profile: [${data.githubUsername}](https://github.com/${data.githubUsername})`;
}

module.exports = generateMarkdown;