// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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

// TODO: Create a function to write README file
function writeFile(err) {fs.writeFile('README.md', response) 
    if (err) {
        console.error(err);
    }
    else {
        console.log('created file');

    }
  // TODO: Describe how this ternary operator (if else statement) works
  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>
    writeFile(err)
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
    
}

// Function call to initialize app
init();

