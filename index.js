// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your description",
  },
  {
    type: "input",
    name: "installation",
    message: "What are installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who is contributing",
  },
  {
    type: "input",
    name: "tests",
    message: "Run tests",
  },
  {
    type: "list",
    name: "license",
    message: "What is your app licensed under?",
    choices: ["Boost", "WTFPL", "Mozilla", "Eclipse", "None"],
  },
];

// TODO: Create a function to write README file
// I combined both functions in to one. By using inquirer.
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFileSync("README.md", generateMarkdown(data), (err) => {
      console.log(err);
    });
  });
}

// Function call to initialize app
init();
