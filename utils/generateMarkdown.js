// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'Apache License 2.0') {
    return "<a href=https://www.apache.org/licenses/LICENSE-2.0><img src=\"https://img.shields.io/badge/License-Apache%202.0-green\">"
  } else if (data.license === "MIT License") {
    return "<a href=https://www.mit.edu/~amini/LICENSE.md><img src=\"https://img.shields.io/badge/License-MIT%202.0-green\">"
  } else if (data.license === "GNU General Public License v2.0") {
    return "<a href=https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html><img src=\"https://img.shields.io/badge/License-GNUGPLv2%202.0-green\">"
  } else if (data.license === "GNU General Public License v3.0") {
    return "<a href=https://www.gnu.org/licenses/gpl-3.0.en.html><img src=\"https://img.shields.io/badge/License-GNUGPLv3%202.0-green\">"
  } else if (data.license === "BSD 2-clause \"Simplified\" license") {
    return "<a href=https://opensource.org/licenses/BSD-2-Clause><img src=\"https://img.shields.io/badge/License-BSD2Clause%202.0-green\">"
  } else if (data.license === "BSD 3-clause \"New\" or \"Revised\" license") {
    return "<a href=https://opensource.org/licenses/BSD-3-Clause><img src=\"https://img.shields.io/badge/License-BSD3Clause%202.0-green\">"
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}


function gitLink(username) {
  return `https://github.com/${username}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.desc}

  ## Table of Content
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [Questions](#Questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub: ${data.githubUser}
  ${gitLink(data.githubUser)}

  Send me an Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
