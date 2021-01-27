// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generate = require("../generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a short description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter usage instructions?",
    name: "usage"
  },
  {
    type: "list",
    message: "What kind of license do you want?",
    choices: ["MIT License", "GNU GPLv3", "The Unlicense"],
    name: "license"
  },
  {
    type: "input",
    message: "What are the guidelines for contributing?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What are the testing options?",
    name: "testing"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
]

inquirer
  .prompt(questions)
  .then(response =>
  // console.log(response),
  {
    let readme = `# ${response.title}
${licensephoto}    
## Table of Contents
[Description](#link)\n   
[Installation](#link)\n
[Usage](#link)\n
[License](#link)\n
[Contributing](#link)\n
[Tests](#link)\n
[Questions](#link) 
      
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

    fs.writeFile("README.md", readme, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }
  );


switch (expression) {
  case "MIT License":
    licensephoto = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
  case "GNU GPLv3":
    licensephoto = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
  case "The Unlicense":
    licensephoto = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

  default:

}