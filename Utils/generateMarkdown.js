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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === 'None') return '';
    return `
## License

This project is licensed under the ${license} license. For more information, see [here](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Motivation
${data.motivation}

## Problem Solved
${data.problem}

## What I Learned
${data.learning}

## Installation
${data.installation}

## System Requirements
${data.requirements ? data.requirements : 'No specific system requirements or dependencies.'}

## Version Requirements
${data.version ? data.version : 'No specific version requirements.'}

## Usage
${data.usage}

## Commands
${data.commands ? data.commands : 'No specific additional commands required.'}

## Examples
${data.examples ? data.examples : 'No examples provided.'}

${data.includeScreenshots ? `## Screenshots\n![Screenshot](${data.screenshotPath})\n` : ''}

## Credits
${data.credits ? data.credits : 'No additional credits.'}

## Third-Party Assets
${data.assets ? data.assets : 'No third-party assets used.'}

${data.features ? `## Features\n${data.features}\n` : ''}

${data.contributing ? `## Contributing\n${data.contributionGuidelines}\n` : ''}

${data.tests ? `## Tests\nTo run tests, use the following command:\n\`\`\`\n${data.testInstructions}\n\`\`\`\n` : ''}

${renderLicenseSection(data.license)}

## Additional Information
${data.additionalInfo ? data.additionalInfo : 'No additional information provided.'}

## Questions
For questions, you can reach me at [${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
`;
};

module.exports = generateMarkdown;