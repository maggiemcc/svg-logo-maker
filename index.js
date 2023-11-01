const inquirer = require('inquirer');
const fs = require('fs');
// const shapes = require('./lib/shapes.js');
// const allShapes = require('./lib/allShapes.js');
const {Triangle} = require('./lib/allShapes.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo text:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text (EX: "white" or "#fff")',
    },
    {
        type: 'list',
        name: 'textFont',
        message: 'What font would you like to use?',
        choices: ["Georgia", "Gill Sans", "Arial", "Courier New", "Copperplate"],
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'What shape would you like for your logo?',
        choices: ["circle", "square", "triangle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape (EX: "black" or "#000")',
    },
    {
        type: 'list',
        name: 'shapeBorder',
        message: 'Would you like a border on your shape?',
        choices: ["yes", "no"],
    },
];

// Function to write svg file
function writeToFile(answers){
    let text = answers.text;
    let textColor = answers.textColor;
    let textFont = answers.textFont;
    let shapeType = answers.shapeType;
    let shapeColor = answers.shapeColor;
    let shapeBorder = answers.shapeBorder;

    if (shapeBorder === "yes"){
        shapeBorder = textColor;
    } else {
        shapeBorder = "none"
    }

    const fileName = `${text}.svg`;

    // Check shape type to render/writeFile for appropriate shape
    if(shapeType === 'triangle'){
        const triangle = new Triangle(text, textColor, textFont, shapeColor, shapeBorder);
        return fs.writeFile(`./user-logo/${fileName}`, triangle.render(), (err) => err ? console.log(err) : console.log('Successfully generated logo.svg!'));
    }
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