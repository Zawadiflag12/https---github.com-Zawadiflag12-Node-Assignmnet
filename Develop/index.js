// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import { type } from "os";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    default: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Please discribe what your proejct is about in details",
    default: "Project Description",
  },
  {
    type: "input",
    name: "inspiration",
    message: "What inspired you to create this project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does your project solve?",
  },
  {
    type: "input",
    name: "different",
    message: "What makes your project different?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "dependencies",
    message: "What are dependencies needed fpr your project and how do you install them?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    default: "User Information",
  },
  {
    type: "input",
    name: "credits",
    message: "Who contributed to this project?",
    default: "No Credits",
  },
  {
      type: "input",
      name: "license",
      message: "What is your project license?",
      default: "No License",
    },
    {
        type: "input",
        name: "feature",
        message: "What features does this project have?",
        default: "No Features",
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?",
      default: "No Contributions",
    },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
  fs.writeFile(README, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
