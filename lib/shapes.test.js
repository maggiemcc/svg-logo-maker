const {Circle, Square, Triangle} = require('./allShapes.js');
var text;
var textColor;
var textFont;
var shapeColor;
var shapeBorder;

// TEST CIRCLE
describe('Circle Test', () => {
    test('Render a green circle', () => {
        text = "CIR";
        textColor = "black";
        textFont = "Copperplate, 'Fantasy'";
        shapeColor = "green";
        shapeBorder = "black";

        const circle = new Circle(text, textColor, textFont, shapeColor, shapeBorder);

        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="90" fill="${shapeColor}" stroke="${shapeBorder}" stroke-width="4px"></circle>
        <text x="150" y="125" font-size="50" text-anchor="middle" font-family="${textFont}" fill="black">${text}</text>
        </svg>`);

        console.log("Green Circle: ", circle.render());
    });
});

// TEST SQUARE
describe('Square Test', () => {
    test('Render a red square', () => {
        text = "REC";
        textColor = "black";
        textFont = "Arial, 'sans-serif'";
        shapeColor = "red";
        shapeBorder = "black";
        
        const square = new Square(text, textColor, textFont, shapeColor, shapeBorder);

        expect(square.render()).toEqual( `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="40" y="10" width="170" height="170" fill="${shapeColor}" stroke="${shapeBorder}" stroke-width="4px"></rect>
        <text x="125" y="120" font-size="50" text-anchor="middle" font-family="${textFont}" fill="${textColor}">${text}</text>
        </svg>`);

        console.log("Red Square: ", square.render());

    });
});

// TEST TRIANGLE
describe('Triangle Test', () => {
    test('Render a blue triangle', () => {
        text = "TRI";
        textColor = "white";
        textFont = "Courier New, 'Monospace'";
        shapeColor = "blue";
        shapeBorder = "none";

        const triangle = new Triangle(text, textColor, textFont, shapeColor, shapeBorder);

        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 10 L15 190 L280 190 Z" fill="${shapeColor}" stroke="${shapeBorder}" stroke-width="4px"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" font-family="${textFont}" fill="${textColor}">${text}</text>
        </svg>`);

        console.log("Blue Triangle: ", triangle.render());
    });
});
