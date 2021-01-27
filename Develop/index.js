// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("../generateMarkdown.js")

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
    choices: ["a", "b", "c"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer.prompt(questions).then(data =>
// console.log(response),

{
  generateMarkdown(data)
//   let readme = `
// # ${response.title}
      
// ## Description
// ${response.description}
      
// ## Installation
// ${response.installation}
      
// ## Usage
// ${response.usage}
      
// ## License
// ${response.license}
      
// ## Contributing
// ${response.contributing}
      
// ## Tests
// ${response.testing}
      
// ## Questions
// ${response.github}
// ${response.email}`;

  fs.writeFile("README.md", readme, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("created file");
    }
  })
}
);

