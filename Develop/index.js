// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
];

// TODO: Create a function to write README file
function writeFile(fileName, answers) {
  if (err) {
    console.log(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      generateMarkdown(response)
        .then(writeFile("readme.md", response))

    )

}

// Function call to initialize app
init();


