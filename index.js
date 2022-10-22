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
    },
    {
        type: 'input',
        message: 'Write a short description of your project.  ',
        name: 'description',
    },
    {
        type: 'list',
        message: "What kind of license should your project have?  ",
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'compliant', 'BSD', 'GNU']
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?  ",
        name: 'dependencies'
    },
    {
        type: 'input',
        message: "What does the installation process look like?  ",
        name: "installation"
    },
    {
        type: 'input',
        message: "Any Instructions?  ",
        name: "usage"
    },
    {
        type: 'input',
        message: "What test do we need to do?  ",
        name: "test"
    },
    {
        type: 'input',
        message: "What is your GitHub username?  ",
        name: "username"
    },
    {
        type: 'input',
        message: "What is your GitHub profile link?  ",
        name: "profile"
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
            
            writeToFile('generate-README.md',readmeContent);
        })
}

// Function call to initialize app
init();
