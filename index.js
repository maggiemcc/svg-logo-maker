const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const allShapes = require('./lib/allShapes.js');

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
        message: 'Enter a color for your text (EX: "white" or "#fff")',
    },
    {
        type: 'list',
        name: 'fontFamily',
        message: 'What font would you like to use?',
        choices: ["Georgia", "Gill Sans", "Arial", "Courier New", "Copperplate"],
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
        message: 'Enter a color for your shape (EX: "black" or "#000")',
    },
    {
        type: 'list',
        name: 'border',
        message: 'Would you like a border on your shape?',
        choices: ["yes", "no"],
    },
];

// Function to write svg file
function writeToFile(answers){
    const fileName = `${answers.text}.svg`;
    // const fileName = "logo.svg";
    const svgPageContent = shapes(answers);
    const pageContentTest = allShapes(answers);
    // fs.writeFile(`./user-logo/${fileName}`, svgPageContent, (err) => err ? console.log(err) : console.log('Successfully generated logo.svg!'));
    fs.writeFile(`./example-logos/${fileName}`, svgPageContent, (err) => err ? console.log(err) : console.log('Successfully generated logo.svg!'));
}

// function to initialize app
function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        if(answers.text.length > 3 || answers.text.length <= 0){
            console.log("Try again, text must have at least 1 character, but not be greater than 3 characters.");
            init();
        } else {
            writeToFile(answers);
        }
    });
}

// Function call to initialize app
init();