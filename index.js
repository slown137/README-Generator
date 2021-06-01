// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter the description of your app.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter the Installation method.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the application?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the instructions for testing?'
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license",
        choices: [
            'Apache License 2.0',
            'MIT License',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license'
        ]
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Please enter your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

/* // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

 */

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
