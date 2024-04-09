// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the main purpose of your project?'
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for starting this project?'
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does your project solve?'
    },
    {
      type: 'input',
      name: 'learning',
      message: 'What did you learn while working on this project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to install your project?'
    },
    {
      type: 'input',
      name: 'requirements',
      message: 'Are there any system requirements or dependencies?'
    },
    {
      type: 'input',
      name: 'version',
      message: 'Are there any specific version requirements for software or libraries?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?'
    },
    {
      type: 'input',
      name: 'commands',
      message: 'Are there any special commands or steps the user should know about?'
    },
    {
      type: 'input',
      name: 'examples',
      message: 'Can you provide examples or use cases?'
    },
    {
      type: 'confirm',
      name: 'screenshots',
      message: 'Would you like to include screenshots?'
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
      message: 'What are the key features of your project?'
    },
    {
      type: 'confirm',
      name: 'contributing',
      message: 'Do you want to include guidelines for how others can contribute to your project?'
    },
    {
      type: 'list',
      name: 'contributionGuidelines',
      message: 'Would you like to use a standard contribution guideline or write custom guidelines?',
      choices: ['Standard', 'Custom']
    },
    {
      type: 'confirm',
      name: 'tests',
      message: 'Do you have any tests for your project?'
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'How can these tests be run?'
    },
    {
      type: 'input',
      name: 'additionalInfo',
      message: 'Is there any other information you\'d like to include in the README that hasn\'t been covered yet?'
    }
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  }
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }
// Function call to initialize app
init();
