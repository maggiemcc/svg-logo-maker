const {Circle, Square, Triangle} = require('./allShapes.js');
// TEST CIRCLE
describe('Circle Test', () => {
    test('Render a green circle', () => {
        const circle = new Circle('CIR', 'black', "Copperplate, 'Fantasy'", 'green', 'black');

        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="90" fill="green" stroke="black" stroke-width="4px"></circle>
        <text x="150" y="125" font-size="50" text-anchor="middle" font-family="Copperplate, 'Fantasy'" fill="black">CIR</text>
        </svg>`)
    });
});

// TEST SQUARE
describe('Square Test', () => {
    test('Render a red square', () => {
        const square = new Square('SQU', 'black', "Arial, 'sans-serif'", 'red', 'black');

        expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="40" y="10" width="170" height="170" fill="red" stroke="black" stroke-width="4px"></rect>
        <text x="125" y="120" font-size="50" text-anchor="middle" font-family="Arial, 'sans-serif'" fill="black">SQU</text>
        </svg>`)
    });
});


// TEST TRIANGLE
describe('Triangle Test', () => {
    test('Render a blue triangle', () => {
        const triangle = new Triangle('TRI', 'white', "Courier New, 'Monospace'", 'blue', 'none');

        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 10 L15 190 L280 190 Z" fill="blue" stroke="none" stroke-width="4px"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" font-family="Courier New, 'Monospace'" fill="white">TRI</text>
        </svg>`);
    });
});
