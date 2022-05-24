// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }

    },

    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['none', 'MIT', 'Creative Commons Attribution 4.0', 'Do What The F*ck You Want To Public License', 'Apache license 2.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please enter one of the listed options.")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter any instalation instructions required for your project.',
        validate: instalationInput => {
            if (instalationInput) {
                return true;
            } else {
                console.log('Please enter instalation instructions.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please tell how your project is used.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide how your project is used.');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide any contribution guidelines for your project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter test instructions for your project.',
        validate: instructionsInput => {
            if (instructionsInput) {
                return true;
            } else {
                console.log('Please provide the test instructions for your project.');
                return false;
            }
        }

    },
    
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username.');
                return false;
            }
        }

    },
    
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email.');
                return false;
            }
        }

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/generatedREADME.md', fileName, data, err =>
    err ? console.error(err) : console.log("LET'S GO!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
            console.log(answers);
            var data = generateMarkdown(answers)
            writeToFile(data)
        });
}

// Function call to initialize app
init();

module.exports = questions;