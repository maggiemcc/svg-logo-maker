class allShapes {
    constructor(text, textColor, textFont, shapeColor, shapeBorder){
        this.text = text;
        this.textColor = textColor;
        this.textFont = textFont;
        this.shapeColor = shapeColor;
        this.shapeBorder = shapeBorder;
    }
}

// CREATE CIRCLE
class Circle extends allShapes {
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" stroke="${this.shapeBorder}" stroke-width="4px"></circle>
        <text x="150" y="125" font-size="50" text-anchor="middle" font-family="${this.textFont}" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

// CREATE SQUARE
class Square extends allShapes {
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="40" y="10" width="170" height="170" fill="${this.shapeColor}" stroke="${this.shapeBorder}" stroke-width="4px"></rect>
        <text x="125" y="120" font-size="50" text-anchor="middle" font-family="${this.textFont}" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

// CREATE TRIANGLE
class Triangle extends allShapes {
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 10 L15 190 L280 190 Z" fill="${this.shapeColor}" stroke="${this.shapeBorder}" stroke-width="4px"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" font-family="${this.textFont}" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

module.exports = {Circle, Square, Triangle}
