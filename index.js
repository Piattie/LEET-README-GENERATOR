// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'motivation',
        message: 'What was your motivation for starting this project?',
        validate: input => input.trim() !== '' ? true : 'Motivation cannot be empty.'
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
        validate: input => input.trim() !== '' ? true : 'Problem description cannot be empty.'
    },
    {
        type: 'input',
        name: 'learning',
        message: 'What did you learn while working on this project?',
        validate: input => input.trim() !== '' ? true : 'Learning cannot be empty.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
        validate: input => input.trim() !== '' ? true : 'Installation steps cannot be empty.'
    },
    {
        type: 'input',
        name: 'requirements',
        message: 'Are there any system requirements or dependencies?',
        validate: input => input.trim() !== '' ? true : 'Requirements cannot be empty.'
    },
    {
        type: 'input',
        name: 'version',
        message: 'Are there any specific version requirements for software or libraries?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
        validate: input => input.trim() !== '' ? true : 'Usage cannot be empty.'
    },
    {
        type: 'input',
        name: 'commands',
        message: 'Are there any special commands or steps the user should know about?',
    },
    {
        type: 'input',
        name: 'examples',
        message: 'Can you provide examples or use cases?',
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
        type: 'input',
        name: 'credits',
        message: 'Did you collaborate with others on this project? If so, who are they?'
    },
    {
        type: 'input',
        name: 'assets',
        message: 'Did you use any third-party assets or follow any tutorials? Please provide details.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to apply to your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Are there any specific badges you want to include?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are the key features of your project?',
        validate: input => input.trim() !== '' ? true : 'Features cannot be empty.'
    },
    {
        type: 'confirm',
        name: 'contributing',
        message: 'Do you want to include guidelines for how others can contribute to your project?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Provide your contribution guidelines:',
        when: answers => answers.contributing,
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
        type: 'input',
        name: 'additionalInfo',
        message: 'Is there any other information you\'d like to include in the README that hasn\'t been covered yet?'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What would you like to name your README file?',
        default: 'README.md',
        validate: input => input.trim() !== '' ? true : 'Filename cannot be empty.'
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
