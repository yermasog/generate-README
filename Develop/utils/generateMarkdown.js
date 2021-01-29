// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   switch (expression) {
//     case "MIT License":
//       licensephoto = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//       break;
//     case "GNU GPLv3":
//       licensephoto = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//       break;
//     case "The Unlicense":
//       licensephoto = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  
//     default:
  
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return response
`# ${response.title}
   
## Table of Contents
* [Description](#link)   
* [Installation](#link)
* [Usage](#link)
* [License](#link)
* [Contributing](#link)
* [Tests](#link)
* [Questions](#link) 
      
## Description
${response.description}
      
## Installation
${response.installation}
      
## Usage
${response.usage}
      
## License
${response.license}
      
## Contributing
${response.contributing}
      
## Tests
${response.testing}
      
## Questions
[https://github.com/${response.github}](https://github.com/${response.github})\n

${response.email}`;

}

module.exports = generateMarkdown;
