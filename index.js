const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo text:',
    },
    {
        type: 'input',
        name: 'tColor',
        message: 'Enter a color for your text (EX: "cyan" or "purple")',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for your logo?',
        choices: ["circle", "square", "triangle"],
    },
    {
        type: 'input',
        name: 'sColor',
        message: 'Enter a color for your shape (EX: "cyan" or "purple")',
    },
];

// Function to write svg file
function writeToFile(answers){
    const fileName = "logo.svg";
    const svgPageContent = shapes(answers);
    fs.writeFile(`./logos-created/${fileName}`, svgPageContent, (err) => err ? console.log(err) : console.log('Successfully generated logo.svg!'));
}

// function to initialize app
function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    });
}

// Function call to initialize app
init();