const {Circle, Triangle} = require('./allShapes.js');
describe('Circle Test', () => {
    test('Render a green circle', () => {
        const cir = new Circle('CIR', 'black', "Copperplate, 'Fantasy'", 'green', 'black',);
        console.log(cir.render());

        expect(cir.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="90" fill="green" stroke="black" stroke-width="4px"></circle>
        <text x="150" y="125" font-size="50" text-anchor="middle" font-family="Copperplate, 'Fantasy'" fill="black">CIR</text>
        </svg>`)
    });
});


describe('Triangle Test', () => {
    test('Render a blue triangle', () => {
        const tri = new Triangle('TRI', 'white', "Courier New, 'Monospace'", 'blue', 'none',);
        console.log(tri.render());

        expect(tri.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 10 L15 190 L280 190 Z" fill="blue" stroke="none" stroke-width="4px"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" font-family="Courier New, 'Monospace'" fill="white">TRI</text>
        </svg>`);
    });
});
