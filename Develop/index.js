// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'project title',
      },
      {
        type: 'input',
        message: 'Enter a short description of the project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage instructions.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What type of license do you want?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'what are the contribution guidelines?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
];




// generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
