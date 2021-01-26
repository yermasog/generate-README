const inquirer = require('inquirer');
const fs = require('fs');
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

inquirer.prompt(questions).then(response =>
// console.log(response),

{
  let readme = `
      # ${response.title}
      
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
      ${response.github}
      ${response.email}`;

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

