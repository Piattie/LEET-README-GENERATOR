// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) return '';
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) return '';
    return `https://choosealicense.com/licenses/${encodeURIComponent(license).toLowerCase()}/`;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) return '';
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
  
  // Add other sections here...
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For questions, you can reach me at [${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
  `;
  }
  
  
  module.exports = generateMarkdown;
  