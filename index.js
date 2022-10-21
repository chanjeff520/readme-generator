// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project?  ",
        name: 'projectName',
        //validate: (answer) => answer.length < 1 ? console.log("Your project name needs more than one character.") : return true;
    },
    {
        type: 'input',
        message: 'Write a short description of your project.  ',
        name: 'descripiton',
    },
    {
        type: 'input',
        message: "What kind of license should your project have?  ",
        name: 'license'
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?  ",
        name: 'dependencies'
    },
    {
        type: 'input',
        message: "What command should be run to run tests?  ",
        name: "testCommands"
    },
    {
        type: 'input',
        message: "What is your GitHub username?  ",
        name: "username"
    },
    {
        type: 'input',
        message: "What is your email address?  ",
        name: "userEmail"
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if(err){
            return console.log(err)
        }
        console.log("Your README.md file is successfully generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers)
        })
}

// Function call to initialize app
init();
