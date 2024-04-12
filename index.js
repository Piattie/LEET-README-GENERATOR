// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: 'What would you like to name your README file?',
        default: 'README.md',
        validate: input => input.trim() !== '' ? true : 'Filename cannot be empty.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => input.trim() !== '' ? true : 'Project title cannot be empty.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the main purpose of your project?',
        validate: input => input.trim() !== '' ? true : 'Description cannot be empty.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
        validate: input => input.trim() !== '' ? true : 'Installation steps cannot be empty.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
        validate: input => input.trim() !== '' ? true : 'Usage cannot be empty.'
    },
    {
        type: 'confirm',
        name: 'includeScreenshots',
        message: 'Would you like to include screenshots?'
    },
    {
        type: 'input',
        name: 'screenshotPath',
        message: 'Enter the relative path to your screenshots:',
        when: answers => answers.includeScreenshots,
        validate: input => input.trim() !== '' ? true : 'Please provide a path for the screenshots.'
    },
    {
        type: 'confirm',
        name: 'contribution',
        message: 'Do you want to include guidelines for how others can contribute to your project?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Provide your contribution guidelines:',
        when: answers => answers.contribution,
        validate: input => input.trim() !== '' ? true : 'Contribution guidelines cannot be empty.'
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Do you have any tests for your project?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How can these tests be run?',
        when: answers => answers.tests,
        validate: input => input.trim() !== '' ? true : 'Test instructions cannot be empty.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to apply to your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
        validate: input => input.trim() !== '' ? true : 'GitHub username cannot be empty.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: input => input.trim() !== '' ? true : 'Email address cannot be empty.'
    },
];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`Successfully created ${fileName}!`);
    });
}

  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateMarkdown(answers);
            writeToFile(answers.fileName, readmeContent);
        })
        .catch(error => {
            console.error('An error occurred during the interview:', error);
        });
}

// Function call to initialize app
init();
